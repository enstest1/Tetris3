const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

let tetrisPieces = [
  [Z, "red"],
  [S, "green"],
  [T, "yellow"],
  [O, "blue"],
  [L, "purple"],
  [I, "cyan"],
  [J, "orange"]
];

let currentPiece;
let nextPiece;

// Generate a random Tetris piece
function randomPiece() {
  let r = randomN = Math.floor(Math.random() * tetrisPieces.length) // 0 -> 6
  return new Piece(tetrisPieces[r][0], tetrisPieces[r][1]);
}

// The Piece object
function Piece(tetris_shape, color) {
  this.tetris_shape = tetris_shape;
  this.color = color;
  
  // The current and next pieces
  this.current_x = 3;
  this.current_y = -2;
  this.next_x = 3;
  this.next_y = -1;
}

// Draw a piece on the canvas
Piece.prototype.draw = function() {
  for (let r = 0; r < this.tetris_shape.length; r++) {
    for (let c = 0; c < this.tetris_shape[r].length; c++) {
      if (this.tetris_shape[r][c]) {
        ctx.fillStyle = this.color;
        ctx.fillRect(c + this.current_x, r + this.current_y, 1, 1);
      }
    }
  }
}

// Move a piece down one row
Piece.prototype.moveDown = function() {
  this.current_y++;
  this.draw();
}

// Start the game when the start button is clicked
document.getElementById('start-button').addEventListener('click', function() {
  currentPiece = randomPiece();
  nextPiece = randomPiece();
  currentPiece.draw();
  nextPiece.draw();
});