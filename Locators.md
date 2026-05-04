# FINDING ELEMENT ON A PAGE
# What is Locator?
-> A locator is playwright's way of finding elements on a page
-> A machnisim used to locate and interact with web elements on a web page. 

A Locator is away of identifying an elemenet on web page so that it can be interacted with.
There are several different types of locators that can be used including :
# ID : 
This locator type uses the unique ID attribute of an element to locate it on the page. 
# Name :
This locator type uses the name attribute of an element to locate it on the page.
# Class name :
This locator type uses the class attribute of an element to locate it on the page. 
# Tag Name : 
This locator type uses the HTML tag name of an element to locate on the page. 
# CSS Seletor : 
This locator type uses a CSS selector to locate an element on the page. 
# Xpath : 
This locator type uses an Xpath expression to locate an element on the page.

When writing test scripts with Selenium, you can use a combination of these locator types to accurately and reliably elements on the page. 

# Three important things about locators 
# Lazy :
When you create a locator , Playwright does NOT search for the element immediately. it only searches when you actually Do something with it -- click, fill, read text. This means you can create locators at the top of your test and uses them later , even if the element doesn't exist yet. 

# Strict : 
if a locator matches MORE then one element, Playwright throws an error. This prevents you from accidentally clicking the wrong button. if you need to work with multiple elements use nth(), first(), or last(); 

# Auto-Wait : 
When you call locator.click();, Playwright autometically waits for the element to be visible, enabbled and stable  before clicking. No need manual sleep() or waitfor() in most cases. 


# Session  - 25 March  - Locator 
# Mastering Xpath  

# What is xpath ?
   -> xpath is a query language for selecting nodes from an XML/ HTML document. 
   -> Xpath was defined by the World wide web consortium  
   -> xpath is supported by all modern browsers 

   -> Core Logic - //tagName[@attribute = 'value']

# Tag -> h1 , p, input, a , form, img, video,audio, button, table, ul, tr, dv, select, span  these are HTML tags 

# attributes : id , class, name, alt, href, src, dataqa , srcset

# Type of Xpath -
1. Relative Xpath
2. Absulate Xpath 

1. Relative xpath : xpath is an expression which basically contains details from the root elements 

# Xpath function : 
function says that there are certain functions you can use, which i am going to give you 
1. Contains() :
// tag_name[conatins(@attribute, value of attribute)]
2. Start-with()
// tag_name[start-with(@attribute,'part of attribute value')]
3. Text()
//tag_name[text()='Text of the element']
 # - - - - - - - String functions - - - - - - - #
 1. concat(string ,...): xpath concat function concatenated number of arguments and return to a concatenated string. 
 2. start-with(string- string): Xapth start-with function return True/ false. return True if second argument string is start with first argument. 
 3. Contain(string, String) - xpath contains function return True/False. Return True if second argument string is a contain of first argument.  
 4. substring-after(string, string)- Xpath substring-after function return the substring of the first argument string base on first occurenece of the second argument string before all character. 
 5. substring-before(string,string) - xapth sbustring-before function return the sbstring of the first argument string base on the first occurenece of second argument string before all character. 
 6. normalize-space(string) - Xpath normalize-spcae function sequence of whitespace combine into single normalize space and removing leading and trailing whitespace. 


 <a id="btn-make-appointment" href="./profile.php#login" class="btn btn-dark btn-lg">Make Appointment</a>

# 1. Contains();
// tag_name[contins(@attribute, value of attribute)]
 //a[contains(@id,'make')] 
  Ex- //a[contains(text(),'Make Appointment')]
# 2. Starts-with
// tag_name[start-with(@attribute,'part of attribute value')]
 Ex- //a[starts-with(@id,"btn")]
# 3. Text()
//tag_name[text()='Text of the element']
Ex- //a[text()='Make Appointment']

//a[text()='Make Appointment' or @id="btn-make-appointment"]
//a[text()='Make Appointment' and @id="btn-make-appointment"]

# 4. normalize-space() - Trim the spaces 
//tagname[normalize-space()="text name"]
Ex-: //a[normalize-space()='Make Appointment']
# 1. getByRole();
1. getByRole finds elements by their ARIA role - the accessibility role that tells screen readers what an element IS. A button is a button , an input is a textbox , a link is a link. these roles are built into HTML -> you don't need to add them manually. 

2. THis is playwright's #1Recommended locator strategy. why? Because ARIA roles are tied to WHAT the element IS. Not how it looks. When the design team changes class = "primary-btn" to class ="main-button" the role button 

# Locator Priority — Which One to Use First
When choosing a locator, Playwright recommends this priority. Start from the top. Use the first one that works for your element.
1. getByRole() — Most resilient. Doesn’t break when CSS or text changes.
2. getByTestId() — Very stable. Created specifically for automation.
3. getByText() — Human‑readable. Breaks only if visible text changes.
4. getByPlaceholder() — Good for form inputs.
5. getByLabel() — Finds inputs by their <label> text.
6. CSS Selectors — Fallback. Fragile when IDs or classes change.
7. XPath — Last resort. Brittle and hard to read. Avoid 






