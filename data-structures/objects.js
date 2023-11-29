//
// Lesson: Objects
// Everything in Javascript's data types family is technically an object. This is specifically learning the object type.
//
// Basics:
// - Container for values in an almost JSON format
// - Denoted by { }
// - Not indexable and order is not guaranteed like arrays
//
// Data/Methods:
// Stored as properties in key/value pairs and has built-in methods.
// Values can be any valid Javascript type including functions.
// -- someObject.{myProperty}    |  Gives the value of myProperty in the object (more access ways below)
// -- someObject.{someMethod}()  |  Access/run a method on the object
//
// Built-in methods and custom can be added, accessed, chained, and executed
// -- someObject.hasOwnProperty()                   |  Built-in method, is executed
// -- someObject.myCustomMethod()                   |  Custom, is executed
// -- someObject.myCustomMethod                     |  Custom, is accessed
// -- someObject.hasOwnProperty().myCustomMethod()  |  Chaining, is running multiple methods on the same object, the object is returned from each method to the next
//
// Advanced:
// - Has access to the "this" keyword which deals with current scope.
// - Closures are how Javascript handles scope and is related to "this".
// - Custom objects (properties/methods) can be manipulated in different ways such as "private" limiting access and usage.
//
// Docs:
// JSON    - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// Objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//

/////////////////////////

//
// Part #1:
// Creating Object Literals
//

// Creating Objects
// {LIVE_EXAMPLES}

// Accessing Objects - Dot Notation (more common)
// More commonly used
// {LIVE_EXAMPLES}

// Accessing Objects - Keys (less common)
// When it might be used is a specific string key is required but invalid to dot notation
// {LIVE_EXAMPLES}

// Reading object keys and values
// {LIVE_EXAMPLES}

// Checking objects for properties
// {LIVE_EXAMPLES}

// Adding properties
// {LIVE_EXAMPLES}

/////////////////////////

// Challenge #1:
// Available at end of this lesson's section
// {CLASS_CODE_TIME}

/////////////////////////

// Challenge #2:
// Available at end of this lesson's section
// {CLASS_CODE_TIME}

/////////////////////////

//
// Homework
// Menu Order      - https://replit.com/team/ptsb-oct-2023/menu-order
// GPA Calculator  - https://replit.com/team/ptsb-oct-2023/gpa-calculator
// Tag Search      - https://replit.com/team/ptsb-oct-2023/tag-search (optional)
//