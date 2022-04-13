let players = ['x', 'o'];
let activePlayer = 0;
let boardSize = 3;//change this parameter to adjust the fieldsize
let board = [];

//generating the board of boardSize
function generateBoard() {
  for (let i = 0; i < boardSize; i++) {
    board[i] = [];
    for (let j = 0; j < boardSize; j++){
      board[i].push("");
    }
  }
  return board;
}

function startGame() {
  activePlayer = 0;
  renderBoard(generateBoard(boardSize));
  return board, activePlayer;
}

function changePlayer() {  
  switch(activePlayer) {
    case 0:
      activePlayer = 1;
      break;
    case 1:
      activePlayer = 0;
      break;
  };
  
  return activePlayer;
};

function click() {

  let row = arguments[0]*1;
  let col = arguments[1]*1;
  
  //refreshing gamefield
  board[row][col] = players[activePlayer];
  renderBoard(board);
  
  let currentStatus = {
    board,
    activePlayer,
    boardSize,
  };
  
  function testRowsIfWinner() {
    let rowResult = []; 
    for (let i = 0; i < currentStatus.boardSize; i++) {
      rowResult.push([]);
      for (let k = 0; k < currentStatus.board[i].length; k++) {
        if (currentStatus.board[i][k] === players[currentStatus.activePlayer]) {
          rowResult[i].push(true);
        } else {
          rowResult[i].push(false);
        }
      }
    }
    
    for (let i = 0; i < rowResult.length; i++) {
      if (rowResult[i].indexOf(false) === -1) {
        return true;
      } else {
        continue;
      }
      return false;
    }
  }
  
  function testColsIfWinner() {
    //turn the board 90deg clockwise
    function rotateBoard90degCW(){
      let angledBoard = [];
      for (let i = 0; i < currentStatus.board.length; i++) {
        angledBoard.push([]);
        for (let j = currentStatus.board.length - 1; j >= 0; j-- ) {
          angledBoard[i][currentStatus.board.length - 1 - j] = currentStatus.board[j][i];
        }
      }
      return angledBoard;      
    }

    //check rows in angledBoard
    let colResult = [];
    let angledBoard = rotateBoard90degCW(currentStatus);

    for (let i = 0; i < currentStatus.board.length; i++) {
      colResult.push([]);
      for (let k = 0; k < currentStatus.board.length; k++) {
        if (angledBoard[i][k] === players[currentStatus.activePlayer]) {
          colResult[i].push(true);
        } else {
          colResult[i].push(false);
        }
      }
    }

     for (let i = 0; i < colResult.length; i++) {
      if (colResult[i].indexOf(false) === -1) {
        return true;
      } else {
        continue;
      }
      return false;
    }
  };

  function testDiagonalsIfWinner() {
    let diagonalsResult = [[], [],];
      
      for (let diag_i = 0; diag_i < currentStatus.board.length; diag_i++) {
        for (let diag_j = 0; diag_j < currentStatus.board.length; diag_j++) {
          //main diadonal 0,0...n,n
          if (diag_i === diag_j) {
            if (currentStatus.board[diag_i][diag_j] === players[currentStatus.activePlayer]) {
              diagonalsResult[0].push(true);
            } else {
              diagonalsResult[0].push(false);
            }
          }
          //side diagonal 0,n...n,0
          if ((diag_i + diag_j) === (currentStatus.board.length - 1)) {
            if (currentStatus.board[diag_i][diag_j] === players[currentStatus.activePlayer]) {
              diagonalsResult[1].push(true);
            } else {
              diagonalsResult[1].push(false);
            }
          }
        }
      }
    
    //cheking diagonalsResult array for false
    for (let i = 0; i < 2; i++) {
      if (diagonalsResult[i].indexOf(false) === -1) {
        return true;
      } else {
        continue;
      }
    }    
    return false;
  };

  function testIfWinner() {
    if (testRowsIfWinner(currentStatus) || testColsIfWinner(currentStatus) || testDiagonalsIfWinner(currentStatus)){
      return true;
      } else {
        return false;
      };
  };

  let winStatus = testIfWinner(currentStatus);
  
  if (winStatus === false) {
    activePlayer = changePlayer(activePlayer);
    } else if (winStatus = true){
        showWinner(activePlayer);
        generateBoard(boardSize)
      } else {
        console.log(`unknown result of IF statement in "click()" function`);
      }
};