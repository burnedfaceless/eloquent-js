/****************************************************************************************
 * @Chapter 02
 * @Exercise 01
 * @Title Looping a Triangle
 * @Instructions Write a loop that makes seven calls to console.log to output the
 * following triangle
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 ***************************************************************************************/

let output = ''
for (let i = 1; i < 8; i++) {
  output += '#'
  console.log(output)
}