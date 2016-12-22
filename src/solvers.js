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
  var solution = undefined;
  var board = new Board({n: n});

  for (var i = 0; i < n; i++) {
    var row = board.get(i);
    for (var j = 0; j < row.length; j++) {
      board.togglePiece(i, j);
      if (board.hasRowConflictAt(i)) {
        //we have a conflict
        board.togglePiece(i, j);

      } else {
        i++;
      }
    }
  }

  if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
    solution = board.rows();
  }

  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var traverse = function (rowNum, colNum, n) {
    debugger;
    if (rowNum === n) {
      solutionCount++;
      return;
    }

    var currentRow = board.get(rowNum);

    for (var j = 0; j < currentRow.length; j++) {

      board.togglePiece(rowNum, j);

      if (!board.hasRowConflictAt(rowNum) && !board.hasColConflictAt(j)) {
        traverse(++rowNum, 0, n);
        board.togglePiece(--rowNum, j);
      } else {
        board.togglePiece(rowNum, j);
      }
    }

    return;
  };

  //n = 3;
  var solutionCount = 0; 
  var board = new Board({n: n});

  //declare a function which takes 

  
  traverse(0, 0, n);
  

  // for (var i = 0; i < n; i++) {
  //   var row = board.get(i);
  //   for (var j = 0; j < row.length; j++) {
  //     board.togglePiece(i, j);
  //     //
  //     if (board.hasRowConflictAt(i)) {
  //       //we have a conflict
  //       board.togglePiece(i, j);

  //     } else {
  //       solutionCount++;
  //       //i++;
  //     }
  //   }
  // }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
