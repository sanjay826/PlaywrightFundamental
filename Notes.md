# 1. page.goto();
-> you need to open a page. page.goto(url) is how every playwright test begins. 
->  await page.goto("https://app.com/pag1")

The waitUntil option tells playwright at which stage it should consider the page "loaded"
and move the next line of your test

-> There are 4 otpion from fastest to slowest 
1. Commit -> the server has responded. HTML may not even be parsed yet. use this for testing redirect or checking HTTP status code. 
2. docontentload -> the HTML is fully parsed and the DOM tree is built. CSS , Images, and fonts may still be loading. Use when you need elements in the DOM but dont care about visual. 
3. load -> everthing is loaded including images,CSS, fonts , and scripts . this is the DEFAULT. use for most tests. 
4. networkidle -> No network request for 500 ms. The page is completely quite. Use for SPAs (React, Angular, Vue) that fetch data via API calls after the initial HTML loads.

# 2. Referer Concept 
The HTTP referer header tells the server which page the user came FROM. When you click a link on google that takes you to a website, the browser sends Referer : https://google.com in the request. The server knows the user came from Google. 

# 3. .fill()
 fill() clears the existing content of an input field and types new text.
 It replaces everything — it does not append.
 Example: If the field had "old text", after fill("new text") only "new text" remains.

# 4. locator.click()
     click() clicks an element.
     Before clicking, Playwright automatically waits for the element to be:
     Attached to the DOM ,Visible ,Enabled (not disabled)table (not moving)No manual waits are needed.Works on buttons, links, checkboxes, radio buttons, dropdowns — anything clickable.
     Click Variants - Double click , Right Click , Force click
             A. Double click click({button : "right});
             B. page.locator(".text-area").dbleClick();
             C. page.locator("#map").click({position : {x:200, Y:200}})
             D. Force click - Skip visiblity and enabled checkes 
                await page.locator(#hidden-btn").click({force:true});
# 5. pressSequentially() :
     pressSequentially() types text ONE CHARACTER AT A TIME with a delay between each keystroke.
     // pressSequentially() — types P...l...a...y...w...r...i...g...h...t 

     await page.locator("#live-search").pressSequentially("Play", { delay: 200 }); 
     console.log("pressSequentially(): typed P -> l -> a -> y with 200ms delay");
# 6. Fill() :
     fill() which sets the entire value instantly, this simulates a real human typing on a keyboard.

# 7. textContent() :
     textContext() reads ALL the inside an element - including text from child elemenets and hidden text.it return the row text content as string.

     page.goback();
# 8. Cookies : 
     Cookies are small peice of data the server store in your browser. They are sent with every request and commonly used for authentication(session cookies). user preferences , and tracking 

     Cookies are the key and value pair which are used to recognized the client? 
# 9. Session State :
     Session state is the data that keeps a user "Logged in" - tipically a session token in a cookie or localStorage. when you login, the server creates a session and sends back a token your browser stores it and includes it in every subsequent request.

     Testing session state means verifying: session persist across pages, sessions survive page refresh, session expire when they should , and sessions are destroyed on lgout 

     Storage state is playwright's way of SAVING a login session to a JSON file and REUSING it later. instead of logging in before every test(slow), you login ONCE, save everything (cookies + localStorage), and load it in all future tests. 

     if you have 50 tests that's 50 login operations saved. Massive time saver. 















