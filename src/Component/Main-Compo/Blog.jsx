import React from "react";

const Blog = () => {
  return (
    <div className="  grid grid-col-1">
      <div className="flex justify-center">
        {" "}
        <div className="hero w-4/6 rounded-2xl m-5 shadow-lg bg-base-200">
          <div className="hero-content flex-row ">
            <div>
              <h1 className="text-2xl font-bold">
                Q1:{" "}
                <span className="text-teal-600">
                  Difference between SQL and NoSQL?
                </span>
              </h1>
              <p className="py-6 text-xl">
                <span className="text-teal-600">Answer: </span>SQL has been
                around for over 40 years, so it is recognizable, documented, and
                widely-used. Safe and versatile, it’s particularly well suited
                for complex queries. However, SQL restricts the user to working
                within a predefined tabular schema, and more care must be taken
                to organize and understand the data before it is used.The
                dynamic schemata of NoSQL databases allow representation of
                alternative structures, often alongside each other, encouraging
                greater flexibility. There is less emphasis on planning, greater
                freedom when adding new attributes or fields, and the
                possibility of varied syntax across databases. As a group,
                however, NoSQL languages lack the standard interface which SQL
                provides, so more complex queries can be difficult to execute.
                Though there are many dialects of SQL, all share a common syntax
                and almost-identical grammar. When querying relational
                databases, fluency in one language translates to proficiency in
                most others. On the other hand, there is very little consistency
                between NoSQL languages, as they concern a diverse set of
                unrelated technologies. Many NoSQL databases have a unique data
                manipulation language constrained by particular structures and
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <div className="hero shadow-lg w-4/6 rounded-2xl m-5  bg-base-200">
          <div className="hero-content flex-row ">
            <div>
              <h1 className="text-2xl font-bold">
                Q2:{" "}
                <span className="text-teal-600">
                  {" "}
                  What is JWT, and how does it work??
                </span>
              </h1>
              <p className="py-6 text-xl">
                <span className="text-teal-600">Answer: </span>JSON Web Token
                (JWT) is an open standard (RFC 7519) for securely transmitting
                information between parties as JSON object.It is compact,
                readable and digitally signed using a private key/ or a public
                key pair by the Identity Provider(IdP). So the integrity and
                authenticity of the token can be verified by other parties
                involved.The purpose of using JWT is not to hide data but to
                ensure the authenticity of the data. JWT is signed and encoded,
                not encrypted. JWT is a token based stateless authentication
                mechanism. Since it is a client-side based stateless session,
                server doesn't have to completely rely on a datastore(database)
                to save session information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <div className="hero  shadow-lg w-4/6 rounded-2xl m-5  bg-base-200">
          <div className="hero-content flex-row ">
            <div>
              <h1 className="text-2xl font-bold">
                Q3:{" "}
                <span className="text-teal-600">
                  {" "}
                  What is the difference between javascript and NodeJS?
                </span>
              </h1>
              <p className="py-6 text-xl">
                <span className="text-teal-600">Answer: </span>JavaScript is a
                client-side scripting language that is lightweight,
                cross-platform, and interpreted. Both Java and HTML include it.
                Node.js, on the other hand, is a V8-based server-side
                programming language.As a result, it is used to create
                network-centric applications. It's a networked system made for
                data-intensive real-time applications. If we compare node js vs.
                python, it is clear that node js will always be the preferred
                option.JavaScript is a simple programming language that can be
                used with any browser that has the JavaScript Engine installed.
                Node.js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language. It requires
                libraries that can be conveniently accessed from JavaScript
                programming to be more helpful.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <div className="hero shadow-lg w-4/6 rounded-2xl m-5  bg-base-200">
          <div className="hero-content flex-row ">
            <div>
              <h1 className="text-2xl font-bold">
                Q4:{" "}
                <span className="text-teal-600">
                  {" "}
                  How does NodeJS handle multiple requests at the same time?
                </span>
              </h1>
              <p className="py-6 text-xl">
                <span className="text-teal-600">Answer: </span>We know NodeJS
                application is single-threaded. Say, if processing involves
                request A that takes 10 seconds, it does not mean that a request
                which comes after this request needs to wait 10 seconds to start
                processing because NodeJS event loops are only single-threaded.
                The entire NodeJS architecture is not single-threaded. NodeJS
                receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. If NodeJS can process the request
                without I/O blocking then the event loop would itself process
                the request and sends the response back to the client by itself.
                But, it is possible to process multiple requests parallelly
                using the NodeJS cluster module or worker_threads module.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
