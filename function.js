/* 
    ? Functions
    * a block of reusable code. It can:
    * take in parameters (doors to the inside of your fx)
    * perform an action
    * return a result
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming through the parameter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    ? There are two types of functions
        * function declaration
            * are hoisted
        * function expression
            * are not hoisted
    
    ? Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }

*/

function greetPerson(name) {
    console.log(`Hello ${name} to my study hall session`)
}

greetPerson("Justin")
greetPerson("Adan")
greetPerson("Joseph")
greetPerson("Aidan")

console.log(greetPerson("Paul"))
console.log("Something else")

// let favoriteStudent = greetPerson("Aidan")
// console.log(favoriteStudent)

function nameAge(name, age) {
    return `Hi my name is ${name} and I'm ${age} years old`
}

console.log(nameAge("Adan", 22))
let instructor = nameAge("Paul", 27)
console.log(instructor)

/* 
    ? Arrow Functions
    * introduced in ES6
    * concise way of writing functions
    * part of the fx expression family
    * do not bind to .this or super (more on that in Classes)
*/

/* 
    ? Concise Body Arrow Functions
    * can only have no or one parameter
    * code block must not have { }
    * return statement must be implicit
*/

const capitalize = str => str.toUpperCase()
const turkeyMsg = () => "Have a Happy Thanksgiving this year!"

console.log(capitalize("paul"))

/* 
    ? Block Body Arrow Functions
    * can have as many params as you want
    * allows the use of explicit return statement
*/

const concatUpperCaseStrings = (str1, str2) => {
    str1.toUpperCase()
    str2.toUpperCase()
    return str1 + str2
}

console.log(concatUpperCaseStrings("turkey", "day"))