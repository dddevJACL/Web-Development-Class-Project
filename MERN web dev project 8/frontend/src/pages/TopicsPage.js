import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class ="articleNav">
                <a href="#Web Servers">Web Servers</a>
                <a href="#Frontend Design">Frontend Design</a>
                <a href="#Optimizing Images">Optimizing Images</a>
                <a href="#Cascading Stylesheets">Cascading Stylesheets</a>
                <a href="#JavaScript">JavaScript</a>
                <a href="#theDOM">Updating the DOM</a>
            </nav>
            <article id="Web Servers">
                <h3>Web Servers</h3>
                <p>     
                    The word <strong>index</strong> relates to websites and servers in that it is convention to name the html 
                    file for a website homepage <strong>index.html</strong>. When a GET request is received by a web server, 
                    and the “path to resource” segment of the URL is simply a backslash (/), 
                    the designated homepage file index.html is the file that is returned to the client.
                </p>
            
                <p>
                    Compared to the file’s details on the web server, the details for the file on my local computer
                    are far briefer. The <strong>Request Headers</strong> and <strong>Response Headers</strong> section of the 
                    Web Dev/Inspector tools is far shorter. The Response Headers of the local file just shows the Content-Type 
                    (text/html) and the date that I last modified the document, whereas on the web server there
                    are other response header name value pairs for things like Content-Encoding and 
                    Connection. The same is true for Request Headers, where the few headers shown for the 
                    local file are also shown for the web server file details, along with many other headers. 
                    In the General section of the web dev/ inspector tools, the URLs for the local file and the 
                    file on the web server are of course different. For example, they use different schemes 
                    (file for the local file, and https for the web server file). For the web server file, 
                    we can see the “Remote Address”, which shows the IP address and the default port number :443.
                </p>
            
                <p>
                    The favicon.ico file has a <strong>status 200 “OK”</strong> because the https GET request for it was 
                    successful and the favicon.ico file was returned by the web server to the client. However, the main.css 
                    and main.js do not have a status 200, they both have <strong>status 404 “Not Found”</strong>. This is 
                    because the file on the web server only has an HTML file, and it does not have a CSS or JS file. 
                    Thus, these files do not exist on the web server, and the GET request for them by the client failed when 
                    the client requested them (hence why it is a client error).
                </p>
                <p>
                    The <strong>scheme</strong> for the web file is https, the secure encrypted version of http. 
                    The <strong>subdomain</strong> of the URL is web.engr, and the <strong>domain</strong> is oregonstate.edu. 
                    Finally, the <strong>path to resource</strong> of the web file is /~dalindad/a1-dalindad/. 
                    The final backslash (/) indicates that the designated homepage of the website should be 
                    returned by a GET request, which is why index.html from the a1-dalindad folder is 
                    returned by the web server to the client.
                </p>
            </article>
            <article id="Frontend Design">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> is a concept relating various aspects of client-side web development, 
                    including important topics such as the <strong>visual design</strong> of web applications and 
                    <strong>usability engineering</strong>. Strong frontend design is essential to any good web application, 
                    as it is the part of the web application that users both see and interact with directly. If the visual 
                    design of a website is unappealing, or if a website is difficult to use or navigate, then users will find 
                    another web application to use instead.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>
                        A usable website must be <strong>effective</strong> at meeting the goals and expectations of users. 
                        Users should be able to easily and accurately use the web application as intended. For example, on a 
                        website that sells books, users should be able to accurately go through the entire process of finding 
                        the book they are looking for and purchasing it.
                    </dd>
                    <dt>Efficient</dt>
                    <dd>
                        A usable website must be <strong>efficient</strong> at helping users do and achieve that which they 
                        wish to do and achieve on a website as quickly and as hassle-free as possible. For example, on a 
                        website that sells books, users should be able to find the book they are looking for, add it to their 
                        cart, and purchase the book, in as few steps as possible.
                    </dd>
                    <dt>Easy to navigate</dt>
                    <dd>
                        A usable website must be <strong>easy to navigate</strong>, meaning that any user, including new users,
                        should be able to successfully find the information they are looking for on the website. Users should 
                        not have to spend a long time looking for what they need, and they should not have a hard time 
                        remembering how to navigate the website in the future after already using it once.
                    </dd>
                    <dt>Error-free</dt>
                    <dd>
                        A usable website must be <strong>error-free</strong>. Users must be able to successfully use the 
                        website as intended by the engineers without running into errors contained within or caused by the 
                        website. The engineers in the design process should foresee and plan ahead for the kind of errors that 
                        users might create on their own, so that the website can still function effectively in such a situation.
                    </dd>
                    <dt>Enjoyable</dt>
                    <dd>
                        A usable website must be <strong>enjoyable</strong> to use. In addition to the other aspects of usable 
                        websites, a website that is aesthetically pleasing will increase the overall enjoyment of users, and 
                        make them more likely to use the website again in the future.
                    </dd>
                </dl>
                <p>
                    <strong>Page layout tags</strong> are of fundamental importance to the layout and design of websites. They 
                    help to organize the content of web pages by breaking up content into different groupings, by using a 
                    <strong>newline</strong>. When it comes time to style a website using CSS, it is possible to individually 
                    style content that is contained within different page layout tags, contributing to the overall design of 
                    the website. Although many page layout tags are displayed similarly on a browser, it is important 
                    to use the appropriate tag to section off the appropriate content, especially as this helps machines such 
                    as search engines traverse a website. Some common page layout tags include &lt;section&gt;, &lt;article&gt;,
                    &lt;main&gt;, and &lt;div&gt;.
                </p>
                <p>
                    <strong>Anchors</strong> link to other content and from page to page within a web application by putting a 
                    URL in the <strong>href attribute</strong> of an <strong>anchor tag</strong>. Within the text of a certain 
                    piece of content on a website, an anchor can be used to link to other content. Within the text anchor, it 
                    is most common to link to another website using an absolute URL than to link to another page within the 
                    same web application. An <strong>absolute URL</strong> is a URL that contains the entire URL, including 
                    the protocol, domain, path to resource, and other necessary elements. Using the &lt;nav&gt; tag, we can 
                    also create a section of a web page that is dedicated to linking to other pages within the same web 
                    application. Within this &lt;nav&gt; tag, we can put other &lt;a&gt; tags that link to other pages within 
                    the same application by using <strong>relative URLs</strong>. Instead of providing the entire URL, a 
                    relative URL is used to navigate to other files within the same directory, by putting a ./ before the 
                    file name.
                </p>
            </article>
            <article id="Optimizing Images">
                <h3>Optimizing Images</h3>
                <p>
                    There are 6 major specifications for online images, to ensure the quality and usability of
                    the website. These are: Descriptive file names, small file sizes, exact dimensions, correct
                    file formats, reduced resolution, and color mode. <strong>Descriptive file names</strong> are essential for helping
                    robots who access the website, like search engines. File names should be descriptive enough so that
                    the contents of the image are clear; however, they should not be overly long. <strong>File sizes</strong> should be 
                    small, as this helps improve the usability of a website by decreasing the time it takes for images to load. When
                    an ultra high-quality image is not essential, lossy forms of compression should be used. Images should be
                    put on websites with <strong>exact dimensions</strong>, meaning that they should fit within the space dimensions 
                    that have been provided for them. This again helps with usability by decreasing the time it takes for a client to 
                    load the image on their browser. Furthermore, images should be displayed in the <strong>correct file format</strong>.
                    For example, photographic images should be saved as .JPG files, and animation images should be saved as .GIF files.
                    Images should be put on websites with <strong>reduced resolution</strong>, which again helps with usability and 
                    loading times for images. Finally, the correct <strong>color mode</strong> should be chosen for images. RGB should
                    be chosen for .PNG, .JPG, .SVG, and .WebP, whereas Indexed should be used for .GIF.
                </p>
                <p>
                    The file formats most appropriate for photos are <strong>.JPG</strong> and <strong>.WebP</strong>. These are the
                    preferable formats for photos as they are highly compressible. Although this reduces the overall image quality,
                    this helps increase the loading time of the images on the website, improving the overall usability of the website.
                    The file formats most appropriate for line art are <strong>.GIF</strong> and <strong>.PNG</strong>.
                    .GIF is often used for animations, or short repeated video clips on webpages. .PNG files have true transparency, 
                    and have low distortion when compressed, which is what makes them suitable for line art images.
                </p>
            </article>
            <article id="Cascading Stylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>
                    The main reasons to incorporate <strong>cascading stylesheets</strong> in websites and apps is to improve the overall
                    aesthetic appearance of the site, and the overall usability of the website. By using cascading stylesheets, we 
                    can make changes to things like font size and color, and the changes we make in the <strong>CSS file</strong>
                    can either affect each different html file on the website, or only a very specific section of one particular html file.
                    By improving the font of our websites by using CSS, we can improve not only the aesthetic appearance of the site, but 
                    we can also improve the readability of the website, hence improving its usability. Of course, changing the appearance of
                    text fonts is just one of a great many things that a designer can do with CSS, but it helps to illustrate the advantages of 
                    using CSS to style websites.
                </p>
                <p>
                    There are five different ways to incorporate styles into websites. They are:
                    externally linked CSS files, embedded within html style tags, using inline html 
                    attributes, in JavaScript template literals, or by manipulating the DOM in JavaScript.
                    The best way by far to incorporate styles in websites is by an <strong>externally
                    linked CSS file</strong>. This is the most efficient way to style the whole website,
                    and it helps with site maintenance as all style changes are written within one CSS file,
                    rather than spread out over various html files and JavaScript files. However, as stated
                    before, it is also possible to make style changes within html and JavaScript files. If this 
                    is done, it is primarily only done for minor style edits, and not for styling an entire website.
                    Within HTML, we can add style through <strong>Embedded &lt;style&gt; tags</strong>, or through 
                    <strong>inline attributes</strong>. In JavaScript, we can make style changes by using 
                    <strong>JavaScript template literals,</strong> or by making changes in the <strong>
                    Document Object Model, or DOM</strong>. Again, in most cases, using an externally linked CSS file is 
                    the preferred best practice method for styling a website.
                </p>
            </article>
            <article id="JavaScript">
                <h3>JavaScript</h3>
                <p>    
                    The main <strong>data types</strong> used in Javascript are: <br></br>
                    1. <strong>Numbers</strong>. In Javascript, numbers are not differentiated between integers and floating point numbers. <br></br>
                    2. <strong>Booleans</strong>. Boolean values are either <strong>True</strong> or <strong>False</strong> <br></br>
                    3. <strong>Strings</strong>. <br></br>
                    4. <strong>Symbols</strong>.  <br></br>
                    5. <strong>Special Values</strong>. These special values include <strong>undefined</strong> and <strong>null</strong>. <br></br>
                    6. <strong>Objects</strong>. Objects encapsulate values that don't fall into the primitive value types lifted above. The Javascript
                    object consists of name value pairs, and is used to build various constructs.
                </p>
                <p> 
                    In JavaScript, <strong>objects</strong> (similar to python's Dictionary) and arrays are both built using Javascript's Object data type.
                    They both store data in <strong>key value pairs</strong>. In <strong>arrays</strong> however, the keys are strings representing index numbers, like '0', '1', '2', etc.
                    The values in arrays can be accessed using an integer in square brackets: [0], or by using string representations of integers: 
                    In basic objects, the keys are simply strings, and the values can be accessed either by using a period: '.' or by using
                    <strong>square bracket notation</strong>: ["key"].
                    Finally, <strong>JSON</strong> is a way of converting JavaScript Objects into a string, that can then be used by programs using other
                    programming languages. This can be done by calling JSON.stringify(). Using JSON.parse() will convert JSON strings back
                    into a JavaScript object so that it can be used in a JavaScript program.
                </p>
                <p> 
                    <strong>Conditionals</strong> in JavaScript work in a similar way to other programming languages. To start
                    a conditional block, first write '<strong>if</strong>' followed by an expression that can resolve to a Boolean inside parentheses.
                    After the expression in parentheses, the conditional code block is written between {} brackets. To chain multiple
                    conditionals, you can use multiple '<strong>else if</strong>' statements. Finally, if an '<strong>else</strong>'
                    conditional is used, the code within the {} brackets of the else conditional will run if all previous conditional 
                    expressions evaluate to false. As a note, it is considered good form in JavaScript to use the strict equality operators,
                    '===' and '!==' instead of the loose equality operators '==' and '!='. Using loose equality operators may lead to
                    undesired results. For example, the integer 42 and the string '42' will evaluate as True if compared using '=='.<br></br>
                    In Javascript, there are various ways to use loops. There is the common <strong>while loop</strong>, which will keep looping until its
                    conditional expression evaluates to false. There is also the <strong>do while</strong>, which always run at least once,
                    and then will continue to run until its conditional expression evaluates to false. Finally, there are also <strong>for loops</strong>
                    in JavaScript as well. We can use <strong>for of</strong> loops to loop over iterables like strings and arrays. <strong>For in</strong>
                    loops can be used to iterate over objects.
                </p>
                <p> 
                    JavaScript also supports <strong>Object-Oriented programming</strong>. 
                    While previously, JavaScript supported the creation of custom Objects through the <strong>prototype</strong> method of
                    creating objects, modern JavaScript uses the keyword 'class' to create <strong>classes</strong>. 
                    To create a new class, call the class keyword, and give the class a name. Then use the constructor function
                    to define the data elements that will be contained within the class. You can set them within the class definition using
                    <strong>this</strong>. The constructor function works similarly to the __init__ function in python. You can also define 
                    methods within the class. Methods that are common to all instances of a class are called <strong>static methods</strong>. 
                    <strong>Subclasses</strong> can also be created in Javascript by using the extend keyword, and then by referencing the parent
                    class that the subclass will inherit from.
                </p>
                <p> 
                    JavaScript also supports <strong>Functional Programming</strong>. 
                    In JavaScript, functions are considered first-class values. This means that functions supports 
                    <strong>higher-order functions</strong>, which are functions that receives functions as an argument to their
                    parameters. Functions can also be assigned to a variable. JavaScript also supports anonymous functions (functions without names),
                    and functions defined with arrow notation: =&gt;. The arrow notation method of writing functions allows the functions to be anonymous,
                    while also being more concise. Finally, JavaScript also supports <strong>closures</strong>.
                </p>
            </article>
            <article id="theDOM">
                <h3>Updating the DOM of a webpage</h3>
                <p>     
                    Developers update the <strong>DOM (Document Object Model)</strong> of webpages using <strong>JavaScript</strong>
                    and <strong>Express</strong>, because it gives developers powerful tools to increase the interactivity of webpages.
                    By updating the DOM with JavaScript and Express, developers can update the layout of webpages on the fly without
                    requiring a page refresh to display the updated layout of the webpage. For example, developers can add <strong>event listeners</strong>
                    on the page that await a user to trigger them, by clicking on them, or by other specified means. Upon the user triggering the event, 
                    JavaScript and Express can change the layout of the page, by appending new DOM elements, for example. This allows developers
                    to create dynamic webpages.
                </p>
            </article>
         </>
    );
}

export default TopicsPage;