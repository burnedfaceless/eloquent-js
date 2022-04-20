# Chapter 1 - Values, Types and Operators

- To a computer, everything is data
- *Bits* - any kind of two-valued things, usually described as ones or zeros

## Values

- *Values* - in JavaScript, a chunk that represents a piece of information (functions, numbers, strings)

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
