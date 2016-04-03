// Enemies our player must avoid
var Enemy = function() {
  var y = generateRandomNum(1, 3) * col;
  var imageUrl = 'images/enemy-bug.png';

  this.speed = generateRandomNum(50, 500);
  Character.call(this, -(row), y, imageUrl);
};
Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.movement = Math.round(this.speed * dt);
  this.x = this.x + this.movement;

  //Check collision with player and reset if true
  var inRightScope = (this.x+row) >= player.x;
  var inLeftScope = ((this.x-row) - player.x) <= 0;

  if ((inRightScope && inLeftScope) && (this.y === player.y)) {
    isGameOver = true;
    // var y = generateRandomNum(1, 3) * col;
    // this.init(-(row), y);
  }

  //Reset Bugs location when passed the game area
  if (this.x > ctx.canvas.width) {
    var y = generateRandomNum(1, 3) * col;
    this.init(-(row), y);
  }
};
