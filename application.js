
var game = function(row, column) {
  var counter = 1
  var color = "none"
  if(counter % 2 == 0){
    color = "red";
    }
    else{
      color = "black";
    };
  board[row][column] = color
  counter++
  var board = Array.from(new Array(7), () => Array.from(new Array(6), () => 'a'));
}

