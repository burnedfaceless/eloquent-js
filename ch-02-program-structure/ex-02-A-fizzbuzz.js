/****************************************************************************************
 * @Chapter 02
 * @Exercise 02 A
 * @Title FIZZBUZZ
 * @Instructions Write a program that uses console.log to print all the numbers from
 * 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead.
 * For numbers divisible by 5 (and not 3) print "Buzz" instead.
 ***************************************************************************************/

for (let i = 0; i < 100; i++) {
  // assign a value which will go from 1 to 100 chronologically to the output binding
  let output = i + 1
  // if that number is divisible by 3, change output to 'Fizz'
  output = (output % 3 === 0) ? 'Fizz' : output
  // if output is still a number, it is not divisible by 3...
  if (typeof output === 'number')
    // ...if it is divisible by 5 change output to 'Buzz'
    output = (output % 5 === 0) ? 'Buzz' : output
  // write whatever value you ended up with
  console.log(output)
}