var darkButton = document.getElementById('darkButton');
var body = document.body;
darkButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

var game = new Chess();
var board = Chessboard('board', {
  draggable: true,
  dropOffBoard: 'snapback',
  position: 'start',
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
});

function onDrop(source, target) {
  // Check if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // always promote to a queen for simplicity
  });
  

  // If the move is illegal, snap the piece back
  if (move === null) {
    return 'snapback';
  }

  // Update the board with the new position
  board.position(game.fen());
}

function onSnapEnd() {
  board.position(game.fen());
}
