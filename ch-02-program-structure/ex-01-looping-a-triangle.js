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

for (let i = 1; i < 8; i++) {
  let output = ''
  for (let j = 1; j < i + 1; j++) {
    output += '#'
  }
  console.log(output)
}