var game = new Game();

$(document).ready(function(){
  $('#black').hide();
  $('#red').hide();
  $('#1').on('click', function(){
    placePieceOnBoard(this)
  })
  $('#2').on('click', function(){
    placePieceOnBoard(this)
  })

});

var placePieceOnBoard = function(button){
  // debugger
  game.placePiece(button.id);
  // debugger
  $('#'+game.currentPlayer).clone().prependTo('#column'+button.id).show();
};
