# Chapter 3 - Functions

## Defining a Function

````javascript
const square = x => {
  return x * x
}

console.log(square(12))
// 144
````

````javascript
const makeNoise = () => {
  console.log('Pling!')
}

makeNoise()
// Pling!

const power = (base, exponent) => {
  let result = 1
  for (let count = 0; count < exponent; count++) {
    result *= base
  }
  return result
}

console.log(power(2, 10))
// 1024
````

Functions that invoke the `return` keyword withoutan expression will return undefined, just
as functions without a `return` statement at all will.

## Parameters and Scope
- Each binding has a *scope*, which is the part of the program in which
the binding is visible
- **global bindings** - bindings defined outside any function or block
  - their scope is the whole program
- in pre-2015 JavaScript only functions created new scopes
  - bindings called with the `var` keyword are only local when passed as function parameters or when declared inside a function
  - bindings called with the `let` or `const` keywords are local when declared inside of functions or any other block

````javascript
let x = 10
if (true) {
  let y = 20
  var z = 30
}
// y is not visible here
if (true) {
  console.log(x + z)
}
// 40
````

````javascript
let x = 10
if (true) {
  let y = 20
  var z = 30
}
// y is not visible here
if (true) {
  if (true) {
    console.log(x + z)
  }
}
// 40
````

- Each scope can look out to the next outermost scope
- The exception to this is when multiple bindings have the same name - the code can only
see the innermost binding (see below)

````javascript
const halve = n => {
  return n / 2
}

let n = 10
console.log(halve(100))
// 50
````

## Nested Scope
- Blocks and functions can be created inside other blocks and functions, creating multiple
degrees of locality

## Functions as Values

- A binding that holds a function is a regular binding can can be assigned a new value:

````javascript
let launchMissles = function() {
  missleSystem.launch('now')
}

if (safeMode) {
  launchMissles = function() {/* do nothing */}
}
````

## Declaration Notation

````javascript
function square(x) {
  return x * x
}
````
- With declaration notation, the function can be invoked, even if it is defined *below* the function call

````javascript
console.log('The future says: ', future())

function future() {
  return "You'll never have flying cars"
}
````

## Arrow Functions

````javascript
const power = (base, exponent) => {
  let result = 1
  for (let count = 0; count < exponent; count++) {
    result *= base
  }
  return result
}
````
- When an arrow function has no parameters, the parameter list is an empty set of parenthesis
````javascript
const horn = () => {
  console.log('Toot')
}
````
- When there is only one parameter name, the parentheses around the parameter can be omitted
- If the body is a signle expression, rather than a block in braces, that expression will be returned
from the function
- The two function definitions below are equivalent

````javascript
const square1 = (x) => { return x * x }
const square2 = x => x * x
````