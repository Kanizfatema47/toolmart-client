import React, { useState } from 'react';
import BlogsQA from './BlogsQA';

const Blogs = () => {
    const [activeIndex, setActiveIndex] = useState([])
  return (
   <div className='my-24'>
     <h2 className='text-3xl font-bold text-center mb-5'>FAQ</h2>
     <div className='flex w-1/2 mx-auto flex-col justify-center items-center'>
      <BlogsQA
        title="Difference between javascript and node js"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <p> Javascript is a language that runs inside the browser.Browsers
          have a built-in interpreter for Javascript, along with a bunch of
          libraries and a run-time environment for working with web pages.
          All browsers have JavaScript engines that run the JavaScript of
          web pages. Nodejs is an interpreter and environment for javascript
          which includes a bunch of libraries for using javascript as a
          general-purpose programming language, with an emphasis on
          asynchronicity and non-blocking operations. Node actually runs the
          same interpreter as Google Chrome V8 but provides a different set
          of libraries and a different run-time environment.</p>
      </BlogsQA>

      <BlogsQA
        title="Differences between sql and nosql databases"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div>
          <h3>
            <b>Sql</b>
          </h3>
          <ul>
            <li>Sql database is a relational database</li>
            <li>It is a table based database</li>
            <li>It has fixed databases</li>
            <li>It is vertically scalable</li>
            <li>These database are good for complex queries</li>
          </ul>
        </div>
        <div>
          <h3>
            <b>Nosql</b>
          </h3>
          <ul>
            <li>
              Is is primarily called non relational or distributed database
            </li>
            <li>It can be document based database</li>
            <li>It can be key value pairs , graph database</li>
            <li>It follows cap</li>
            <li>These database are not good for complex queries</li>
          </ul>
        </div>

      </BlogsQA>

      <BlogsQA
        title="What is the purpose of jwt and how does it work"
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div>
          <p>
            JWT or JSON Web Token, is an open standard used to share information
            between two parties securely a client and a server. JWT
            authentication is a token-based stateless authentication mechanism.
            It is popularly used as a client-side-based stateless session, this
            means the server doesnt have to completely rely on a data store
            database to save session information.
            <br />
            <b>How does it work?</b>
            <br />
            When it comes to API authentication and server-to-server
            authorization, JSON web token is particularly a useful technology.
            In terms of Single Sign-On it means that a service provider can
            receive trustworthy information from the authentication server.
          </p>
          <ol>
            <li>User sign-in using username and password.</li>
            <li>

              The authentication server verifies the credentials and issues a
              JWT signed using a private key.
            </li>

          </ol>
        </div>
      </BlogsQA>

      
    </div>
   </div>
  );
};

export default Blogs;