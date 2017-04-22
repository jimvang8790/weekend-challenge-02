Weekend Challenge 02
====================

Assignment Details
------------------

Base Mode
---------

- Build a calculator application using jQuery, Node, and Express
- The logic for the calculator needs to be housed on the Server
- The client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM)
- Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this: { x: 3, y: 4, type: Add }
- When the server receives it, build out logic to compute the numbers in Addition, Subtraction, Multiplication, and Division
- Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.
- Finally, build a 'clear' button that resets the whole experience.

Hard Mode
---------

- Convert the input fields for the two values to Buttons. So the experience would allow the user to click on a numerical button, then a mathematical operation, then a numerical button again. Then have an equal button that sends all of the information to the server.

Pro Mode
--------

- Create a delay from when the client receives the response from the Server, and when the calculation is actually displayed on the DOM. The delay should be 3 seconds. During that delay, show information that says 'computing' until the 3 second delay has finished, then remove the 'computing' message while showing the calculation.

***TODOs***

-[x] add index.html
-[x] add styles.css
-[x] add server.js
-[x] add client.js
-[x] add module.js
-[x] npm init --yes
-[x] npm install express --save
-[x] npm install body-parser --save
-[x] npm install jquery --save
