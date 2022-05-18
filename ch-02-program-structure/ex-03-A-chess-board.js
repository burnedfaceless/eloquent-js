/****************************************************************************************
 * @Chapter 02
 * @Exercise 03 A
 * @Title CHESS BOARD
 * @Instructions Write a program that creates a string that represents an 8.8 grid, using
 * newline characters to separate lines.
 * @URL https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 ***************************************************************************************/

/***************************************************************************************
 * @desc This function generates a single row. There are two variations - the odd rows
 * and the even rows, so it takes the rowType as a parameter and generates the correct
 * row
 * @param rowType - this is whether the row is an odd or even row
 * @returns {string} returns one row
 **************************************************************************************/

const generateRow = rowType => {
  let row = ''
  for (let i = 0; i < 8; i++) {
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
 * @returns {string} returns one row
 **************************************************************************************/

const generateChessBoardString = () => {
  try {
    let string = ''
    for (let i = 0; i < 8; i++) {
      string += (i === 0 || i % 2 === 0) ? generateRow('even') : generateRow('odd')
      string += '\n'
    }
    return string
  } catch(e) {
    console.log(e)
  }
}

// why don't we console.log the function now?

console.log(generateChessBoardString())
