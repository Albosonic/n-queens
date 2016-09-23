/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; 
  var board = new Board({n: n});
  var rows = board.rows();
  
  for (var i = 0; i < rows.length; i++) {       // i = 0
    for (var j = 0; j < rows.length; j++) {     // j = 1
      rows[i][j] = 1;
      if (board.hasRowConflictAt(i) || board.hasColConflictAt(j)) {
        rows[i][j] = 0;
      }
    }
  }

  console.log('single solution for ' + n + ' rooks:', JSON.stringify(rows));
  
  return rows;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var factorial = function(m) {
    if (m === 0) {
      return 1;
    }
    return m * factorial(m - 1);
  };

  var result = factorial(n);

  console.log('Number of solutions for ' + n + ' rooks:', result);
  
  return result;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
var findNQueensSolution = function(n) {
  var columnCount = 0;
  if (n === 0) {
    return [];
  }

  var recurse = function(columnIndex) {
    var board = new Board({n: n});
    var nQueens = 0;
    var rows = board.rows();

    for (var i = 0; i < rows.length; i++) {
      for (var j = 0; j < rows.length; j++) {
        if (i === 0) {
          if (j + columnIndex < rows.length) {
            rows[i][j + columnIndex] = 1;
            if (board.hasAnyQueenConflictsOn(i, j + columnIndex)) {
              rows[i][j + columnIndex] = 0;
            } else {
              nQueens++;
            }
          }
        } else {
          rows[i][j] = 1;
          if (board.hasAnyQueenConflictsOn(i, j)) {
            rows[i][j] = 0;
          } else {
            nQueens++;
          }
        }
      }
    }
   
    if (nQueens < n) {
      columnCount++;
      recurse(columnCount);
    } else {
      console.log('single solution for ' + n + ' queens:', JSON.stringify(rows));
      return rows;
    }
  };
  recurse(columnCount);
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
