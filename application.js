var game = new Game();

$(document).ready(function(){

  $('#0').on('click', function(){
    placePieceOnBoard(this)
  })
  $('#1').on('click', function(){
    placePieceOnBoard(this)
  })
  $('#2').on('click', function(){
    placePieceOnBoard(this)
  })
  $('#3').on('click', function(){
    placePieceOnBoard(this)
  })
  $('#4').on('click', function(){
    placePieceOnBoard(this)
  })
  $('#5').on('click', function(){
    placePieceOnBoard(this)
  })
  $('#6').on('click', function(){
    placePieceOnBoard(this)
  })

});

var placePieceOnBoard = function(button){
  // debugger
  game.placePiece(button.id);

  if (game.winner()){
    game.switchPlayers();
    alert(game.currentPlayer + " is the winner!");
    if (confirm("Start a new game!")) {
    location.reload();
    }
    }

};

