
// var game = function(row, column) {
//   var counter = 1
//   var color = "none"
//   if(counter % 2 == 0){
//     color = "red";
//     }
//     else{
//       color = "black";
//     };
//   board[row][column] = color
//   counter++
//   var board = Array.from(new Array(7), () => Array.from(new Array(6), () => 'a'));
// }

    	window.Game = function(){
		this.board = new Array(6).fill(new Array(7).fill(null))
		this.players = ["red", "yellow"]
		this.currentPlayer = "red"
	}
	Game.prototype.placePiece = function(column) {
		for(var row= 0; row < this.board.length; row ++) {
			if(this.board[row + 1][column] !== null || row == 5) {
				this.board[row][column] = this.currentPlayer
				this.switchPlayers()
			}
		}
	}
	Game.prototype.switchPlayers = function() {
		if(this.currentPlayer === "red"){
			this.currentPlayer = "yellow"
		} else {
			this.currentPlayer = "red"
		}
	}
	Game.prototype.winner = function() {
		var winner = false;
		//check horizontal for four in a row
		this.board.forEach(function(row){
			if(hasConnectFour(row)) {
				return hasConnectFour(row)
			}
		})
		//check vertically for four in row
		var transposedBoard = this.board[0].map(function(col, i) {
				return this.board.map(function(row) {
					return row[i];
				})
			});
		transposedBoard.forEach(function(row){
			if(hasConnectFour(row)) {
				return hasConnectFour(row)
			}
		})

		//check left diagonals for four in row.
		var leftDiagBoardObject = {}
		for(var rowIndex = 0; rowIndex < this.board.length; rowIndex ++) {
			for (var colIndex = 0; colIndex < this.board[0].length; colIndex ++) {
				leftDiagBoardObject[rowIndex - colIndex] = leftDiagBoardObject[rowIndex - colIndex] || []
				leftDiagBoardObject[rowIndex - colIndex].push(this.board[rowIndex][colIndex])
			}
		}
		var leftDiagBoardList = []
		for (var key in leftDiagBoardObject) {
			leftDiagBoardList.push(leftDiagBoardObject[key]);
		}

		leftDiagBoardList.forEach(function(row){
			if(hasConnectFour(row)) {
				return hasConnectFour(row)
			}
		})

		//check right diagonals for four in row.
		var rightDiagBoardObject = {}
		for(var rowIndex = 0; rowIndex < this.board.length; rowIndex ++) {
			for (var colIndex = 0; colIndex < this.board[0].length; colIndex ++) {
				rightDiagBoardObject[rowIndex + colIndex] = rightDiagBoardObject[rowIndex + colIndex] || []
				rightDiagBoardObject[rowIndex + colIndex].push(this.board[rowIndex][colIndex])
			}
		}
		var rightDiagBoardList = []
		for (var key in rightDiagBoardObject) {
			rightDiagBoardList.push(rightDiagBoardObject[key]);
		}

		rightDiagBoardList.forEach(function(row){
			if(hasConnectFour(row)) {
				return hasConnectFour(row)
			}
		})
	}
	Game.prototype.hasConnectFour = function(list) {
		for(var i = 0; (i + 3) < list.length; i ++) {
			var redWins = list.slice(i, i+4).every(function(square){
				return square === "red"
			})
			var yellowWins = list.slice(i, i+4).every(function(square){
				return square === "yellow"
			})
			if (redWins) {
				return "red"
			}else if(yellowWins) {
				return "yellow"
			}
		}
		return false
	}
});

