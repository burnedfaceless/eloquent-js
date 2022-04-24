/****************************************************************************************
 * @Chapter 02
 * @Exercise 03 A
 * @Title CHESS BOARD
 * @Instructions Write a program that creates a string that represents an 8.8 grid, using
 * newline characters to separate lines.
 * @URL https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 ***************************************************************************************/

// node modules
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


/***************************************************************************************
 * @desc This function generates a single row. There are two variations - the odd rows
 * and the even rows so it takes the rowType as a parameter and generates the correct
 * row
 * @param rowType - must be even or odd
 * @param value - the number of columns in a row
 * @returns {string} returns one row
 **************************************************************************************/

const generateRow = (value, rowType) => {
  let row = ''
  for (let i = 0; i < value; i++) {
    if (rowType === 'odd') {
      row += (i === 0 || i % 2 === 0) ? '#' : ' '
    } else if (rowType === 'even') {
      row += (i === 0 || i % 2 === 0) ? ' ' : '#'
    } else {
      throw `${rowType} is not a valid value for parameter 'rowType'.
            The only accepted arguments are 'odd' or 'even'.`
    }
  }
  return row
}


/***************************************************************************************
 * @desc This function loops and concatenates rows to the chessboard string.
 * @param value - the number of rows
 * @returns {string} returns one row
 **************************************************************************************/

const generateChessBoardString = value => {
  try {
    let string = '\n'
    for (let i = 0; i < value; i++) {
      string += (i === 0 || i % 2 === 0) ? generateRow(value, 'even') : generateRow(value,'odd')
      string += '\n'
    }
    console.log(string)
  } catch(e) {
    console.log('\n\nYou are in the generateChessBoardString() function \n\n')
    console.log(e)
  }
}

const main = () => {
  readline.question('The width and height of this square is set to 8 in any direction. \n Please enter a custom value ', value => {
    generateChessBoardString(Number(value))
    readline.close()
  })
}

main()


