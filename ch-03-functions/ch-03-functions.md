# Chapter 3 - Functions

## Defining a Function

````javascript
const square = x => {
  return x * x
}

console.log(square(12))
// 144
````

## Parameters and Scope
- Each binding has a *scope*, which is the part of the program in which
the binding is visible
- *global bindings* - bindings defined outside any function or block
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

-- all of them declared inside a function are local