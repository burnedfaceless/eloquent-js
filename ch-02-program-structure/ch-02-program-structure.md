# Chapter 2 - Program Structure

## Expressions and Statements

- *expression* - a fragment of code that produces a value
  - every value written literally is an expression
    - 22
    - "will smith"
  - an expression between parenthesis is also an expression
  - unary operator applied to one expression is an expression
  - binary operator applied to two expressions is an expression
- If an expression corresponds to a sentence fragment, a JavaScript
*statement* corresponds to a full sentence

## Bindings

- *binding*, or *variable* - used to catch and hold values
- a single `let` statement may define multiple bindings

````javascript
let one = 1, two = 2
console.log(one + two)
// 3
````

- The words `var` and `const` can also be used to create bindings

````javascript
var name = 'Will Smith'
const greeting = 'Hello '
console.log(greeting + name)
// Hello Will Smith
````
- `var` was used exclusively in pre-2015 JavaScript. This will be covered in depth in the next chapter.
- `const` is short for constant
  - this binding cannot be made to point at a new value once it has been assigned its initial value

## Binding Names

- *Binding names* 
  - can be any word that isn't reserved by the JavaScript language for some other purpose
  - can contain digits
  - may include dollar signs ($) or underscores (_) but no other special characters
- Full list of reserved words can be viewed below

````javascript
break case catch class const continue debugger default
delete do else enum export extends false finally for 
function if implements import interface in instanceof let
new package private protected public return static super 
switch this throw true try typeof var void while with yield
````

## The Enviornment

- *environment* - the collection of bindings and their values that exist at a given time
  - when a program starts up this environment is not empty
    - Always contains bindings that are part of the language standard
    - In most environments it has bindings that provide ways to interact with the surrounding system

## Functions

- *function* - a piece of a program wrapped in a value

````javascript
prompt('Enter passcode')
````

- Executing a function is called *invoking*, *calling* or *applying* it
- A function is executed when you put parenthesis after an expression that produces a function
value (usually the name of the binding that holds the function)

## The `console.log` Function

- Binding names cannot contain periods
  - console.log is not a simple binding
    - expression that retrieves the log method from the value held by the console binding

## Return Values

- When a function produces a value, it is said to return that value

````javascript
console.log(Math.min(2, 4) + 100)
// 102
````

## Control Flow
- When your program contains more than one statement they are executed from top to bottom

## Conditional Execution
 - uses the `if` keyword to selectively execute or not execute code

## While and Do Loops

### While Loop

````javascript
let number = 0
while (number <= 12) {
  console.log(number)
  number += 2
}
// 0
// 2
// ... etcetera
````
- The code below calculates and shows the value of 2<sup>10</sup>
````javascript
let result = 1
let counter = 0
while (counter < 10) {
  result *= 2
  counter++
}
console.log(result)
// 1024
````

### Do Loop

````javascript
let yourName
do {
  yourName = prompt('Who are you?')
} while (!yourName)

console.log(yourName)
````

### For Loops

````javascript
for (let number = 0; number <= 12; number += 2) {
  console.log(number)
}
// 0
// 2
// ... etecetra 
````

- The code below calculates and shows the value of 2<sup>10</sup>

````javascript
let result = 1
for (let counter = 0; counter < 10; counter++) {
  result *= 2
}
console.log(result)
// 1024
````

## Breaking Out of A Loop

- In addition to the lopping condition producing `false`, you can end a loop with the `break` statement
- The intention below uses the break statement to end an intentional infinite loop

````javascript
for (let number = 18; true; number++) {
  if (number % 7 === 0) {
    console.log(number)
    break
  }
}
````

## Updating Bindings Succinctly

````javascript
counter = counter + 1
counter += 1  
````
- Similar operands: `*=`, `-=`
- `counter += 1` `counter++`
- `counter -= 1` `counter--`

## Dispatching on a Value With Switch

````javascript
  switch (prompt('What is the weather like?')) {
  case 'rainy':
    console.log('Remember to bring an umbrella.')
    break
  case 'sunny':
    console.log('Dress lightly')
    break
  case 'cloudy':
    console.log('Go outside.')
    break
  default:
    console.log('Unknown weather type!')
}
````

## Capitalization

- JavaScript convention is to use camelcase

````javascript
const nextGuitarPurchase = 'Fender Stratocaster'
````