var game = new Game();

$(document).ready(function(){

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
  $('#7').on('click', function(){
    placePieceOnBoard(this)
  })

});

var placePieceOnBoard = function(button){
  // debugger
  game.placePiece(button.id);
  // debugger
};
