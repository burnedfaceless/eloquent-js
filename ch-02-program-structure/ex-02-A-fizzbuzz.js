/****************************************************************************************
 * @Chapter 02
 * @Exercise 02 A
 * @Title FIZZBUZZ
 * @Instructions Write a program that uses console.log to print all the numbers from
 * 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead.
 * For numbers divisible by 5 (and not 3) print "Buzz" instead.
 ***************************************************************************************/

for (let i = 1; i <= 100; i++) {
  // if number is divisible by 3, set output to 'Fizz'
  // else if it's divisible by 5, set output to 'Buzz', else print the number
  const output = (i % 3 === 0) ? 'Fizz' : (i % 5 === 0) ? 'Buzz' : i
  console.log(output)
}