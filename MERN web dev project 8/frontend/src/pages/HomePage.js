import React from 'react';

function HomePage() {
    return (
        <>
            <h1>My CS290 Website</h1>
            <h2>Below, please find a brief description of the various technologies that were used to build this site.</h2>
            <p>Note; MongoDB connection was removed before posting to a public repo for privcacy / security reasons</p>
            <article >
                <p>The root of this site is an index.html page. This page holds
                    the essential information required for a web browser to parse,
                    read, and display the page. However, instead of using various
                    html documents to link to various pages in the app, this web app
                    instead uses React. React takes advantage of Javascript's ability
                    to dynamically update the DOM, or the document object model. So instead 
                    of linking multiple html documents together to make up a website, what
                    React does instead is it dynamically updates a single html document to display
                    "other" web pages. A single html div tag with an id of "root" is used, and
                    React dynamically updates this single div tag with all the various "separate"
                    webpages. 
                </p>
                <p>
                    JavaScript itself also allows more dynamism and interactivity in the site,
                    by allowing functionality such as the ability to update the page by clicking on an
                    icon or image, for example. Node Js is used in order for the server itself to run
                    Javascript, instead of relying on the browser to run Javascript. Express is used in tandem
                    with Node, to handle all the various HTTP requests and responses. Mongo DB and Mongoose
                    is used as well to handle the backend of this web app. They are used to handle 
                    the creation, organization and management of databases. In this website, it used
                    to track a catalog / databases of various albums that I've listened to. Using Mongo DB
                    makes doing create, read, update, and delete operations, otherwise known as CRUD, far
                    simpler. It also allows easier searching and querying of data.  
                </p>
                <p> Various technologies are used to style this webpage. The core of all styling is done
                    with CSS, or cascading stylesheets. Instead of specifying the style of a page within
                    each and every html page, CSS allows us to update the style of the website globally
                    from a single CSS file. Using classes and ids with html elements also allows us to
                    individually style sections of content as needed. This site also uses Google fonts
                    within the CSS file to style the fonts. Within the gallery page, images have been
                    optimized so that they load efficiently, while still retaining much of their original
                    quality.
                </p>
                
            </article>
         </>
    );
}

export default HomePage;