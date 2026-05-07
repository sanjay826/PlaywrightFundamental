/**
 * Custom TTA Reporter for Playwright
 * @author Pramod Dutta — https://thetestingacademy.com
 * @version 2.0.0
 *
 * Generates a self-contained HTML report in tta-report/ after every test run.
 * Includes: summary cards, environment info, per-test table with screenshots,
 * videos, traces, step details, and error stack traces.
 */

import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from "@playwright/test/reporter";
import * as fs from "fs";
import * as path from "path";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TestRecord {
  id: string;
  title: string;
  suite: string;
  file: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  status: "passed" | "failed" | "skipped" | "timedOut";
  error?: string | undefined;
  errorStack?: string | undefined;
  screenshot?: string | undefined;
  video?: string | undefined;
  trace?: string | undefined;
  tags: string[];
  author: string;
  consoleLogs: string[]; // captured from test stdout
}

interface Summary {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
}

// ─── Reporter ─────────────────────────────────────────────────────────────────

class CustomTTAReporter implements Reporter {
  private readonly reportDir = "tta-report";
  private config!: FullConfig;
  private runStart!: Date;
  private runEnd!: Date;
  private records: TestRecord[] = [];
  private summary: Summary = { total: 0, passed: 0, failed: 0, skipped: 0 };
  private testCounter = 0;

  // ── Lifecycle ──────────────────────────────────────────────────────────────

  onBegin(config: FullConfig, suite: Suite): void {
    this.config = config;
    this.runStart = new Date();
    const total = suite.allTests().length;
    const browser = config.projects[0]?.name ?? "chromium";
    const env = process.env["TEST_ENV"] ?? "UAT";

    console.log("");
    console.log(
      "╔══════════════════════════════════════════════════════════════╗",
    );
    console.log(
      "║          🎭  TTA PLAYWRIGHT AUTOMATION FRAMEWORK             ║",
    );
    console.log(
      "╠══════════════════════════════════════════════════════════════╣",
    );
    console.log(`║  📅 Started : ${this.fmtTime(this.runStart).padEnd(47)}║`);
    console.log(`║  🌐 Env     : ${env.padEnd(47)}║`);
    console.log(`║  🖥  Browser : ${browser.padEnd(47)}║`);
    console.log(`║  📋 Tests   : ${String(total).padEnd(47)}║`);
    console.log(
      "╚══════════════════════════════════════════════════════════════╝",
    );
    console.log("");
  }

  onTestBegin(test: TestCase): void {
    const file = path.basename(test.location.file);
    console.log(`  ▶  ${test.title}`);
    console.log(`     📁 ${file}:${test.location.line}`);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    this.testCounter++;
    this.summary.total++;

    const status = this.resolveStatus(result.status);
    if (status === "passed") this.summary.passed++;
    else if (status === "failed" || status === "timedOut")
      this.summary.failed++;
    else this.summary.skipped++;

    const icon =
      status === "passed" ? "✅" : status === "skipped" ? "⏭ " : "❌";
    const label =
      status === "passed"
        ? "PASSED"
        : status === "skipped"
          ? "SKIPPED"
          : "FAILED";
    const duration = this.fmtDuration(result.duration);

    console.log(`     ${icon} ${label}  (${duration})`);
    if (result.error?.message) {
      const msg = result.error.message.split("\n")[0] ?? "";
      console.log(`     ⚠️  ${msg.substring(0, 90)}`);
    }
    console.log("");

    // Copy attachments into the report folder
    const screenshot = this.copyAttachment(
      result,
      "image/png",
      `screenshot_${this.testCounter}.png`,
      "screenshots",
    );
    const video = this.copyAttachment(
      result,
      "video/webm",
      `video_${this.testCounter}.webm`,
      "videos",
    );
    const trace = this.copyAttachment(
      result,
      "application/zip",
      `trace_${this.testCounter}.zip`,
      "traces",
    );

    // Build suite name from parent chain
    const suite = this.getSuiteName(test);

    // Capture console.log output from the test
    const consoleLogs: string[] = [];
    for (const chunk of result.stdout) {
      const text = typeof chunk === "string" ? chunk : chunk.toString();
      consoleLogs.push(...text.split("\n").filter((l) => l.trim()));
    }

    this.records.push({
      id: test.id,
      title: test.title,
      suite,
      file: `${path.basename(test.location.file)}:${test.location.line}`,
      startTime: new Date(Date.now() - result.duration),
      endTime: new Date(),
      duration: result.duration,
      status,
      error: result.error?.message,
      errorStack: result.error?.stack,
      screenshot,
      video,
      trace,
      tags: test.tags ?? [],
      author: process.env["TEST_AUTHOR"] ?? "TTA-QA",
      consoleLogs,
    });
  }

  async onEnd(_result: FullResult): Promise<void> {
    this.runEnd = new Date();
    const reportFile = this.writeReport();
    this.updateIndex(reportFile);

    const passRate =
      this.summary.total > 0
        ? ((this.summary.passed / this.summary.total) * 100).toFixed(1)
        : "0";
    const duration = this.fmtDuration(
      this.runEnd.getTime() - this.runStart.getTime(),
    );

    // ── Console summary table ──────────────────────────────────────────────
    const W = 64;
    const dline = "═".repeat(W);

    console.log(`╔${dline}╗`);
    console.log(`║${"  📊  FINAL TEST RESULTS".padEnd(W)}║`);
    console.log(`╠${dline}╣`);

    // Per-test rows
    this.records.forEach((r, i) => {
      const num = String(i + 1).padStart(2);
      const icon =
        r.status === "passed" ? "✅" : r.status === "skipped" ? "⏭ " : "❌";
      const name =
        r.title.length > 38 ? r.title.substring(0, 35) + "…" : r.title;
      const dur = this.fmtDuration(r.duration).padStart(5);
      const left = `  ${num}. ${icon} ${name}`;
      const right = `${dur}  `;
      const pad = W - left.length - right.length;
      console.log(`║${left}${" ".repeat(Math.max(0, pad))}${right}║`);
    });

    const row = (label: string, value: string) => {
      const content = `  ${label}${value}`;
      return `║${content}${" ".repeat(Math.max(0, W - content.length))}║`;
    };

    console.log(`╠${dline}╣`);
    console.log(`║${"".padEnd(W)}║`);
    console.log(row("✅  Passed   :  ", String(this.summary.passed)));
    console.log(row("❌  Failed   :  ", String(this.summary.failed)));
    console.log(row("⏭   Skipped  :  ", String(this.summary.skipped)));
    console.log(row("📋  Total    :  ", String(this.summary.total)));
    console.log(`║${"".padEnd(W)}║`);
    console.log(`╠${dline}╣`);
    console.log(row("📈  Pass Rate :  ", `${passRate}%`));
    console.log(row("⏱   Duration  :  ", duration));
    console.log(row("📄  Report    :  ", path.basename(reportFile)));
    console.log(`╚${dline}╝`);
    console.log("");
  }

  // ── Helpers ────────────────────────────────────────────────────────────────

  private resolveStatus(s: string): TestRecord["status"] {
    if (s === "passed") return "passed";
    if (s === "timedOut") return "timedOut";
    if (s === "skipped" || s === "interrupted") return "skipped";
    return "failed";
  }

  private getSuiteName(test: TestCase): string {
    let parent: Suite | undefined = test.parent;
    while (parent) {
      if (parent.title) return parent.title;
      parent = parent.parent;
    }
    return "Default";
  }

  /** Copies the first matching attachment to the report folder and returns its relative path. */
  private copyAttachment(
    result: TestResult,
    contentType: string,
    destName: string,
    subDir: string,
  ): string | undefined {
    const attachment = result.attachments.find(
      (a) => a.contentType === contentType && a.path,
    );
    if (!attachment?.path) return undefined;

    const destDir = path.join(this.reportDir, subDir);
    fs.mkdirSync(destDir, { recursive: true });
    const destPath = path.join(destDir, destName);

    try {
      fs.copyFileSync(attachment.path, destPath);
      return `${subDir}/${destName}`;
    } catch {
      return undefined;
    }
  }

  // ── Report generation ──────────────────────────────────────────────────────

  private writeReport(): string {
    fs.mkdirSync(this.reportDir, { recursive: true });
    const ts = this.fmtTimestamp(this.runStart);
    const file = path.join(this.reportDir, `report_${ts}.html`);
    fs.writeFileSync(file, this.buildHTML());
    return file;
  }

  private updateIndex(latestFile: string): void {
    const base = path.basename(latestFile);
    const index = path.join(this.reportDir, "index.html");
    fs.writeFileSync(
      index,
      `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=${base}">` +
        `<title>TTA Report</title></head><body>` +
        `<p>Redirecting to <a href="${base}">latest report</a>…</p></body></html>`,
    );
  }

  // ── HTML ───────────────────────────────────────────────────────────────────

  private buildHTML(): string {
    const browser = this.config.projects[0]?.name ?? "chromium";
    const platform =
      process.platform === "win32"
        ? "Windows"
        : process.platform === "darwin"
          ? "Mac"
          : "Linux";
    const env = process.env["TEST_ENV"] ?? "UAT";
    const passRate =
      this.summary.total > 0
        ? ((this.summary.passed / this.summary.total) * 100).toFixed(1)
        : "0";
    const duration = this.fmtDuration(
      this.runEnd.getTime() - this.runStart.getTime(),
    );
    const runId = this.fmtTimestamp(this.runStart);

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title> TTA Automation Report</title>
  <style>${this.css()}</style>
</head>
<body>

<header class="header">
  <h1>🎭 TTA Automation Report</h1>
  <p>The Testing Academy · Playwright Framework</p>
</header>

<main class="container">

  <!-- Summary cards -->
  <div class="cards">
    <div class="card">        <b>${this.summary.total}</b><span>Total</span></div>
    <div class="card pass">  <b>${this.summary.passed}</b><span>Passed</span></div>
    <div class="card fail">  <b>${this.summary.failed}</b><span>Failed</span></div>
    <div class="card skip">  <b>${this.summary.skipped}</b><span>Skipped</span></div>
    <div class="card rate">  <b>${passRate}%</b><span>Pass Rate</span></div>
    <div class="card dur">   <b>${duration}</b><span>Duration</span></div>
  </div>

  <!-- Environment bar -->
  <div class="env-bar">
    <span><label>Environment</label><em class="badge-env">${env.toUpperCase()}</em></span>
    <span><label>Browser</label><em>${browser}</em></span>
    <span><label>Platform</label><em>${platform}</em></span>
    <span><label>Workers</label><em>${this.config.workers ?? 1}</em></span>
    <span><label>Run ID</label><em class="mono">${runId}</em></span>
    <span><label>Started</label><em>${this.fmtTime(this.runStart)}</em></span>
  </div>

  <!-- Filters -->
  <div class="filters">
    <span>Status:</span>
    <label><input type="checkbox" class="sf" value="all" checked onchange="filter(this)"> All</label>
    <label><input type="checkbox" class="sf" value="passed"  onchange="filter(this)"> ✅ Passed</label>
    <label><input type="checkbox" class="sf" value="failed"  onchange="filter(this)"> ❌ Failed</label>
    <label><input type="checkbox" class="sf" value="skipped" onchange="filter(this)"> ⏭ Skipped</label>
  </div>

  <!-- Test table -->
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>#</th><th>Suite</th><th>Test Name</th><th>Author</th>
          <th>Tags</th><th>File</th><th>Start</th><th>End</th>
          <th>Duration</th><th>Status</th><th>Screenshot</th><th>Video</th><th>Trace</th>
        </tr>
      </thead>
      <tbody>
        ${this.records.map((r, i) => this.buildRow(r, i)).join("\n")}
      </tbody>
    </table>
  </div>

</main>

<!-- Screenshot lightbox -->
<div id="lb" class="lightbox" onclick="this.classList.remove('open')">
  <img id="lb-img" src="" alt="">
</div>

<footer>Built with ❤️ by <a href="https://thetestingacademy.com" target="_blank">Pramod Dutta</a></footer>

<script>${this.js()}</script>
</body>
</html>`;
  }

  private buildRow(r: TestRecord, i: number): string {
    const sc =
      r.status === "passed"
        ? "pass"
        : r.status === "failed" || r.status === "timedOut"
          ? "fail"
          : "skip";
    const txt =
      r.status === "passed"
        ? "Passed"
        : r.status === "failed" || r.status === "timedOut"
          ? "Failed"
          : "Skipped";

    const screenshotLink = r.screenshot
      ? `<a href="${r.screenshot}" class="art-link ss-link">📷 View</a>`
      : "N/A";
    const videoLink = r.video
      ? `<a href="${r.video}" target="_blank" class="art-link vid-link">▶ Play</a>`
      : "N/A";
    const traceLink = r.trace
      ? `<a href="${r.trace}" download class="art-link trc-link">📁 Trace</a>`
      : "N/A";

    const detailId = `d-${r.id}`;

    return `
      <tr class="test-row ${sc}" data-status="${sc}">
        <td>${i + 1}</td>
        <td>${this.esc(r.suite)}</td>
        <td class="test-name" onclick="toggle('${detailId}')">${this.esc(r.title)}</td>
        <td>${this.esc(r.author)}</td>
        <td>${r.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</td>
        <td class="mono small" title="${this.esc(r.file)}">${this.esc(r.file)}</td>
        <td class="small">${this.fmtTime(r.startTime)}</td>
        <td class="small">${this.fmtTime(r.endTime)}</td>
        <td class="center">${this.fmtDuration(r.duration)}</td>
        <td class="center"><span class="badge ${sc}">${txt}</span></td>
        <td class="center">${screenshotLink}</td>
        <td class="center">${videoLink}</td>
        <td class="center">${traceLink}</td>
      </tr>
      ${
        r.error || r.consoleLogs.length > 0
          ? `
      <tr id="${detailId}" class="detail-row hidden">
        <td colspan="13">
          <div class="detail-box">
            ${
              r.consoleLogs.length > 0
                ? `
            <div class="console-section">
              <div class="console-title">📋 Console Output (${r.consoleLogs.length} lines)</div>
              <div class="console-body">${r.consoleLogs.map((l) => `<div class="console-line">${this.esc(l)}</div>`).join("")}</div>
            </div>`
                : ""
            }
            ${
              r.error
                ? `
            <div class="err-title">❌ Error</div>
            <pre class="err-msg">${this.esc(r.error)}</pre>
            ${r.errorStack ? `<details><summary>Stack trace</summary><pre class="stack">${this.esc(r.errorStack)}</pre></details>` : ""}`
                : ""
            }
            ${r.video ? `<video controls src="${r.video}" class="detail-video"></video>` : ""}
          </div>
        </td>
      </tr>`
          : ""
      }`;
  }

  // ── CSS ────────────────────────────────────────────────────────────────────

  private css(): string {
    return `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --green: #059669; --green-l: #10b981; --green-bg: #ecfdf5;
      --red: #dc2626;   --red-bg: #fef2f2;
      --gray: #64748b;  --dark: #1e293b;
      --border: #e2e8f0; --bg: #f1f5f9;
      --radius: 10px; --shadow: 0 2px 8px rgba(0,0,0,.08);
    }
    body { font-family: 'Inter', sans-serif; font-size: 14px; background: var(--bg); color: var(--dark); }

    /* Header */
    .header { background: linear-gradient(135deg, var(--green) 0%, #0d9488 100%);
      color: #fff; text-align: center; padding: 36px 20px; }
    .header h1 { font-size: 28px; font-weight: 700; }
    .header p  { opacity: .85; margin-top: 6px; }

    /* Container */
    .container { max-width: 1400px; margin: 0 auto; padding: 24px 20px; }

    /* Summary cards */
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap: 16px; margin-bottom: 20px; }
    .card { background: #fff; border-radius: var(--radius); padding: 20px 16px; text-align: center;
      box-shadow: var(--shadow); border-left: 4px solid var(--green); }
    .card b    { display: block; font-size: 32px; font-weight: 700; }
    .card span { font-size: 11px; text-transform: uppercase; letter-spacing: .5px; color: var(--gray); margin-top: 6px; display: block; }
    .card.pass { border-color: var(--green); } .card.pass b { color: var(--green); }
    .card.fail { border-color: var(--red);   } .card.fail b { color: var(--red); }
    .card.skip { border-color: #94a3b8; }
    .card.rate { border-color: #6366f1; }      .card.rate b { color: #6366f1; }
    .card.dur  { border-color: #f59e0b; }      .card.dur  b { color: #f59e0b; }

    /* Env bar */
    .env-bar { background: #fff; border-radius: var(--radius); padding: 14px 20px;
      display: flex; flex-wrap: wrap; gap: 20px; align-items: center;
      box-shadow: var(--shadow); margin-bottom: 16px; }
    .env-bar label { font-size: 11px; text-transform: uppercase; color: var(--gray); font-weight: 600; margin-right: 6px; }
    .env-bar em    { font-style: normal; font-weight: 600; }
    .badge-env { background: var(--green); color: #fff; padding: 3px 10px; border-radius: 20px; font-size: 12px; }

    /* Filters */
    .filters { background: #fff; border-radius: var(--radius); padding: 14px 20px;
      display: flex; gap: 16px; align-items: center; flex-wrap: wrap;
      box-shadow: var(--shadow); margin-bottom: 16px; font-size: 13px; }
    .filters label { display: flex; align-items: center; gap: 6px; cursor: pointer; }
    .filters input { accent-color: var(--green); }

    /* Table */
    .table-wrap { background: #fff; border-radius: var(--radius); box-shadow: var(--shadow); overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; table-layout: fixed; }
    thead { background: var(--dark); color: #fff; position: sticky; top: 0; z-index: 5; }
    th { padding: 12px 10px; text-align: left; font-size: 11px; text-transform: uppercase;
      letter-spacing: .4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    td { padding: 12px 10px; border-bottom: 1px solid var(--border);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: middle; }
    tbody tr:hover { background: var(--green-bg); }
    tr.fail td:first-child { border-left: 3px solid var(--red); }
    tr.pass td:first-child { border-left: 3px solid var(--green); }

    /* Column widths */
    th:nth-child(1)  { width: 44px;  }   /* # */
    th:nth-child(2)  { width: 90px;  }   /* Suite */
    th:nth-child(3)  { width: 200px; }   /* Test Name */
    th:nth-child(4)  { width: 70px;  }   /* Author */
    th:nth-child(5)  { width: 80px;  }   /* Tags */
    th:nth-child(6)  { width: 160px; }   /* File */
    th:nth-child(7)  { width: 120px; }   /* Start */
    th:nth-child(8)  { width: 120px; }   /* End */
    th:nth-child(9)  { width: 70px;  }   /* Duration */
    th:nth-child(10) { width: 80px;  }   /* Status */
    th:nth-child(11) { width: 80px;  }   /* Screenshot */
    th:nth-child(12) { width: 70px;  }   /* Video */
    th:nth-child(13) { width: 70px;  }   /* Trace */

    .test-name { cursor: pointer; font-weight: 500; white-space: normal; }
    .test-name:hover { color: var(--green); }
    .mono  { font-family: monospace; }
    .small { font-size: 12px; color: var(--gray); white-space: nowrap; }
    .center { text-align: center; }

    /* Status badges */
    .badge { display: inline-block; padding: 3px 10px; border-radius: 20px;
      font-size: 11px; font-weight: 600; text-transform: uppercase; }
    .badge.pass { background: #dcfce7; color: #15803d; }
    .badge.fail { background: #fee2e2; color: #b91c1c; }
    .badge.skip { background: #f1f5f9; color: #475569; }

    /* Artifact links */
    .art-link { display: inline-block; padding: 4px 8px; border-radius: 6px;
      text-decoration: none; font-size: 11px; font-weight: 500; }
    .ss-link  { background: var(--green-bg); color: var(--green); }
    .vid-link { background: #fef3c7; color: #b45309; }
    .trc-link { background: #ede9fe; color: #6d28d9; }

    /* Tags */
    .tag { display: inline-block; background: var(--green-bg); color: var(--green);
      border: 1px solid var(--green-l); padding: 2px 7px; border-radius: 10px;
      font-size: 10px; font-weight: 600; margin: 1px; }

    /* Detail row */
    .detail-row.hidden { display: none; }
    .detail-box { padding: 16px 20px; background: #fafbff; border-top: 3px solid var(--green); }
    .console-section { margin-bottom: 16px; }
    .console-title { font-size: 12px; font-weight: 700; color: var(--dark); margin-bottom: 8px;
      text-transform: uppercase; letter-spacing: .4px; }
    .console-body { background: #0f172a; border-radius: 8px; padding: 14px 16px;
      max-height: 280px; overflow-y: auto; font-family: monospace; font-size: 12px; line-height: 1.7; }
    .console-line { color: #a7f3d0; border-bottom: 1px solid rgba(255,255,255,.04); padding: 1px 0; }
    .console-line:last-child { border-bottom: none; }
    .err-title  { font-weight: 700; color: var(--red); margin-bottom: 8px; margin-top: 12px; }
    .err-msg    { font-family: monospace; font-size: 12px; color: var(--red);
      white-space: pre-wrap; word-break: break-word; }
    .stack      { font-family: monospace; font-size: 11px; background: var(--dark);
      color: #a7f3d0; padding: 12px; border-radius: 6px; max-height: 200px;
      overflow-y: auto; white-space: pre-wrap; margin-top: 8px; }
    details summary { cursor: pointer; color: var(--gray); font-size: 12px; margin-top: 10px; }
    .detail-video { max-width: 100%; max-height: 360px; border-radius: 8px; margin-top: 12px; }

    /* Lightbox */
    .lightbox { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.9);
      justify-content: center; align-items: center; z-index: 100; cursor: zoom-out; }
    .lightbox.open { display: flex; }
    .lightbox img  { max-width: 95vw; max-height: 95vh; border-radius: 8px; }

    /* Footer */
    footer { text-align: center; padding: 24px; font-size: 12px; color: var(--gray); }
    footer a { color: var(--green); font-weight: 600; text-decoration: none; }

    @media (max-width: 768px) {
      .cards { grid-template-columns: repeat(2, 1fr); }
      .env-bar, .filters { flex-direction: column; align-items: flex-start; }
    }`;
  }

  // ── JavaScript ─────────────────────────────────────────────────────────────

  private js(): string {
    return `
    // Toggle error detail row
    function toggle(id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('hidden');
    }

    // Status filter
    function filter(cb) {
      const allCb = document.querySelector('.sf[value="all"]');
      if (cb.value === 'all') {
        document.querySelectorAll('.sf:not([value="all"])').forEach(c => c.checked = false);
      } else {
        if (allCb) allCb.checked = false;
        if (!document.querySelectorAll('.sf:not([value="all"]):checked').length && allCb)
          allCb.checked = true;
      }
      const active = Array.from(document.querySelectorAll('.sf:not([value="all"]):checked')).map(c => c.value);
      const showAll = document.querySelector('.sf[value="all"]')?.checked;
      document.querySelectorAll('.test-row').forEach(row => {
        row.style.display = (showAll || active.includes(row.dataset.status)) ? '' : 'none';
      });
    }

    // Screenshot lightbox
    document.addEventListener('DOMContentLoaded', () => {
      const lb    = document.getElementById('lb');
      const lbImg = document.getElementById('lb-img');
      document.querySelectorAll('.ss-link').forEach(a => {
        a.addEventListener('click', e => {
          e.preventDefault();
          lbImg.src = a.href;
          lb.classList.add('open');
        });
      });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

      // Auto-expand failed tests
      document.querySelectorAll('.test-row.fail .test-name').forEach(cell => cell.click());
    });`;
  }

  // ── Utilities ──────────────────────────────────────────────────────────────

  private fmtTime(d: Date): string {
    return d.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  }

  private fmtDuration(ms: number): string {
    const s = Math.floor(ms / 1000);
    return s >= 60 ? `${Math.floor(s / 60)}m ${s % 60}s` : `${s}s`;
  }

  private fmtTimestamp(d: Date): string {
    return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
    function p(n: number) {
      return String(n).padStart(2, "0");
    }
  }

  private esc(s: string): string {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
}

export default CustomTTAReporter;
