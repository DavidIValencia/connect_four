$(document).ready(function(){
  $('#black').hide();
  $('#red').hide();
  window.game = new window.Game();
  var placePieceOnBoard = function(column){
      game.placePiece(column);
    };

    //https://jslinterrors.com/dont-make-functions-within-a-loop
    for (var i = 0; i < 7; i++ ) {
      (function(iCopy) {
        $('#columnButton' + i).on('click', function(){
          var currentPlayer = game.currentPlayer
          placePieceOnBoard(iCopy);
            $('#column' + iCopy).append(
       '<img class="token" id="' + currentPlayer +'" src="pics/' + currentPlayer + '.gif"/>'
            );
          });
    }(i))
  }
  $('#restart').on('click', function(){
    $('.column').animate({height: "960px"}, "slow")
    $('.token').animate({opacity: 0}, "slow")
    setTimeout(function(){
      $('.token').remove()
    }, 1000)
    $('.column').animate({height: "480px"})
    window.game = new window.Game();
  })
});

