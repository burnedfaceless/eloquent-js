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