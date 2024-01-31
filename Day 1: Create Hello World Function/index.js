/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};


//  const f = createHelloWorld("Hello World");
//  console.log(f()); // "Hello World"
 