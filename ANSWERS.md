<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Put simply, a middleware is a software that sits between two "somethings". More specifically, in the case of middlewares which we've discussed in Authentication, a middleware is a function that sits between an HTTP request (such as a GET request to a particular path; e.g., to /api/signin) and a route handler. Route handlers are also examples of middlewares.

Sessions basically contain client-specific data that will persist across requests. They allow a server to store information about a client.

bcrypts is a hashing algorithm. It basically allows you to hash pashwords and store them inside databases. It has two functions: hash and compare. bcrypts protect us from attacks from hackers.

JSON Web Tokens (JWT) is essentially a long string that can be sent across domains. It can also contain data about the user, just like cookies.

2.  What does bcrypt do in order to prevent attacks?

bcrypt does two things to protect us from attacks: hash and compare. It hashes passwords and turns them into seemingly random strings. It also slows down hackers through the concept of "cost" -- embedding time into a code to delay hashing attempts.

3.  What are the three parts of the JSON Web Token?

Header, payload, and signature.
