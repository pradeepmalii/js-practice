1. What is the DOM and how does JavaScript interact with it?
ans: The DOM is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to dynamically access, modify, add, or remove elements and content.

2. What's the difference between querySelector and getElementById?
ans: getElementById only works with IDs, returns single element
querySelector works with any CSS selector — ID, class, tag, attribute
In real projects always use querySelector and querySelectorAll — more flexible

3. What's the difference between textContent and innerHTML?
ans: textContent treats everything as plain text — safer, faster
innerHTML parses and renders HTML — more powerful but can be a security risk if you're inserting user input (XSS attacks). Always sanitize user input before using innerHTML.

4. "What's the difference between querySelector and querySelectorAll? What do they return?"
ans: querySelector() returns the first matching element as a single Element object, whereas querySelectorAll() returns all matching elements as a static NodeList, which is an array-like collection.