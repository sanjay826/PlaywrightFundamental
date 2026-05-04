import{test ,expect} from '@playwright/test';

test("CSS Selectors", async ({page})=>{

  // div.first span:nth-child(2n+1) odd number - 
  await page.goto("https:awesomeqa.com/css/");
  const allSpans = page.locator("div.first>span");
  const count = await allSpans.count();
  console.log(count);

  const span1 = await allSpans.first().textContent();
  const span2 = await allSpans.nth(1).textContent();
  const span3 = await allSpans.nth(2).textContent();
  const span4 = await allSpans.nth(3).textContent();
  const span5 = await allSpans.nth(4).textContent();
  const span6 = await allSpans.last().textContent();

  console.log("First (Span1) :" , span1);
  console.log("Second (Span2) :" , span2);
  console.log("Thrid (Span3) :" , span3);
  console.log("four (Span4) :" , span4);
  console.log("five (Span5) :" , span5);
  console.log("Six (Span6) :" , span6);

  // for loop for all print 

  for(let i=0; i <count; i++){
    const span_ith = await allSpans.nth(i).textContent();
    console.log(span_ith);
  }


})