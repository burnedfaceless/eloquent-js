# Chapter 1 - Values, Types and Operators

- To a computer, everything is data
- *Bits* - any kind of two-valued things, usually described as ones or zeros

## Values

- *Values* - in JavaScript, a chunk of bits that represents a piece of information (functions, numbers, strings)

## Numbers

- Values of the *number* type are numeric values
- JavaScript uses 64 bits to store a single numeric value
  - The maximum whole number that could be stored with 64 bits would be (2<sup>64</sup>)
  - This would be 18 quintillion, but JavaScript uses some of that space to store negative numbers
    - The maximum whole number JS can store is in the range of 9 quadrillion
- Fractional numbers are written by using a dot: **9.81**
- JavaScript supports scientific notation for very large or small numbers: **2.998e8 - this would be 2.998 * 10<sup>8</sup>**
- Calculations with integers in JavaScript are guaranteed to be precise
- Calculations with fractional digital numbers are not precise

### Arithmetic

- The * sign means multiplication
- The + sign means addition
- The - sign means subtraction
- The / sign means division
- The % sign means modulo (remainder)
- The *, / signs have precedence over the +, - signs
- The *, / signs occur in order from left to right when 
- The +, - signs occur in order from left to right
- () can change the order of an operation

### Special Numbers

- **Infinity**
- **-Infinity**
  - represent the positive and negative infinities
- **NaN** - stands for not a number, though it is a value of the number type

## Strings

- Strings are written by enclosing their content in quotes:

````javascript
`Down by the sea`
"Lie on the ocean"
'Float on the ocean'
````

- Newlines are only allowed if the string is enclosed with backticks (`)
  - Every other string must be single line

````javascript
console.log("A newline character is written like \"\\n\".")
// A newline characgter is written like "\n".
````

- JavaScript uses 16 bits per string element - 2<sup>16</sup> different numbers
- Unicode defines about twice as many numbers as that - some characters take up two "character positions" in JS strings

````javascript
console.log("con" + "cat" + "e" + "nate")
// concatenate
````

- Strings written with single or double quotes behave much the same
- Strings written with backticks are often called *template literals*
  - span multiple lines
  - embed other values inside of ````${} ````

````javascript
console.log(`half of 100 is ${100 / 2}`)
// half of 100 is 50
````

## Unary Operators

- Operators that take two values are called *binary* operators
- Operators that take one value are called *unary* operators

````javascript
console.log(typeof  4.5)
// number
console.log(typeof  'x')
// string
````

## Boolean Values

### Comparison

````javascript
console.log(3 > 2)
// true
console.log(3 < 2)
// false
````

- There is only one value in JavaScript that is not equal to itself and that is NaN

````javascript
console.log(NaN == NaN)
// false
````

### Logical Operators

- *and* - represented by &&, only true if both of the values are true
- *or* - represented by ||, true if either of the values give to it are true
- *not* - written as an exclamation mark, it flips the value given to it
- *ternary* - operators on 3 values, a more concise way to write an if else statement

````javascript
// and
console.log(true && false)
// false
console.log(true && true)
// true

// or
console.log(false || true)
// true
console.log(false || false)
// false

// ternary
console.log(true ? 1 : 2)
// 1
console.log(false ? 1 : 2)
// 2
````

## Empty Values

- Two special values used to denote the absence of a *meaningful* value
  - null
  - undefined

## Automatic Type Conversion

- *type coercion* - when an operator is applied to a wrong type of value JavaScript converts that value
to the type it thinks it needs
- NaN is often produced from type coercions
- JavaScript provides additional operators - `===` and `!==` to test for exact comparisons

## Short-Circuiting of Logical Operators

- The `||` operator will return the valuer to its left when that can be converted to true and it will return the value on its right otherwise
````javascript
console.log(null || 'user')
// user
console.log('Will' || 'Smith')
// Will
````
- The `&&` operator works the other way around
  - When a value to its left is something that converts to false it returns that value
  - When the value to its left converts to true it returns the value on the right

````javascript
console.log(null && 'user')
// null
console.log('Will' && 'Smith')
// Smith
````

## JavaScript Truthy and Falsy Values - taken from MDN
- JavaScript uses type conversion to to coerce any value into a boolean for contexts that require it, 
like a loop or conditional

### Truthy Values
- a truthy value is a value that is considered true when encountered in a boolean contect
- all values are designed as truthy unless explicitly reserved as a falsy variable
- [Truthy Values - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

### Falsy Values
- a falsy value is a value that is considered false when encountered in a boolean context
- There are a short number of these values written at the table linked below
- [Falsy Values - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
