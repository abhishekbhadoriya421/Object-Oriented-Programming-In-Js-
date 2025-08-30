/**
 * 1. this-> Keyword is a reference object of current execution context in the function it is called.
 * 2. this-> keyword values depends on how it is called. this keyword does not have a fix value it can change how they are called
 * 3. this-> Execution Context
 *      - inside the global scope it referes to window object 
 *      - inside an object method it refere to the object 
 *      - inside Constructor function it refere to newly created object 
 *      - in arrow function this inherit from its surroundings scopre
 */

/**
 * Global Scopre
 */

// console.log(this) // in javascript the output will be window object 


/**
 * Method Object 
 */
a = 16;
const methodObject = {
    a: 10,
    value: function () {
        return [this.a];
    }
}

// console.log(methodObject.value())


/**
 * Constructor function
 */
a = 15
function ConstructorFunction(a, b) {
    this.a = a
    this.b = b
}

// object = new ConstructorFunction(3, 6);
// console.log(object.a, ' ', object.b)


const arrow = () => console.log(this);

arrow()