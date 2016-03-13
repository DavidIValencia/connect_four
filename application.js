$(document).ready(function(){
  $('#black').hide();
  $('#red').hide();
  var game = new Game();
  $('#columnButton1').on('click', placePieceOnBoard);
  // $('columnButton2').on('click', placePieceOnBoard);
  // $('columnButton3').on('click', placePieceOnBoard);
  // $('columnButton4').on('click', placePieceOnBoard);
  // $('columnButton5').on('click', placePieceOnBoard);
  // $('columnButton6').on('click', placePieceOnBoard);
  // $('columnButton7').on('click', placePieceOnBoard);
});

var placePieceOnBoard = function(){
  game.placePiece;
  $('game.currentPlayer').clone().appendTo(this);
};
