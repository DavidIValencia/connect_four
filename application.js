$(document).ready(function(){
  $('#black').hide();
  $('#red').hide();
  var game = new window.Game();
  var placePieceOnBoard = function(column){
      game.placePiece(column);
    };
  $('#columnButton1').on('click', function(){
      var currentPlayer = game.currentPlayer
      placePieceOnBoard(0);
      $('#column1').append(
   '<img class="token" id="' + currentPlayer +'" src="pics/' + currentPlayer + '.gif"/>'
        );
      });
  // $('game.currentPlayer').append(this);
  // $('columnButton2').on('click', placePieceOnBoard);
  // $('columnButton3').on('click', placePieceOnBoard);
  // $('columnButton4').on('click', placePieceOnBoard);
  // $('columnButton5').on('click', placePieceOnBoard);
  // $('columnButton6').on('click', placePieceOnBoard);
  // $('columnButton7').on('click', placePieceOnBoard);
});

