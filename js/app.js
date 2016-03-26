//TODO Create a Character class with x and y property and setLocation function
var row = 83;
var col = 101;

var generateRandomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var reset = function() {
  player = new Player();
};

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -(row);
    this.y = generateRandomNum(1, 3) * col;
    this.speed = generateRandomNum(50, 500);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
      this.movement = Math.round(this.speed * dt);
      this.x = this.x + this.movement;

      //Check collision with player and reset if true
      var inRightScope = (this.x+row) >= player.x;
      var inLeftScope = ((this.x-row) - player.x) <= 0;

      if ((inRightScope && inLeftScope) && (this.y === player.y)) {
          player = new Player();
      };

      //Reset Bugs location when passed the game area
      if (this.x > ctx.canvas.width) {
          this.x = -(row);
          this.y = generateRandomNum(1, 3) * col;
      };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function() {
  this.x = row * 3;
  this.y = col * 4;
  this.sprite = 'images/char-boy.png';
};

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
  //this.x = x;
  //this.y = y;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKeys) {
  switch(allowedKeys) {
    case 'left': {
      if (this.x <= 0) {
        return;
      };

      this.x -= row;
      console.log('x ' + this.x + ' y ' + this.y);
      break;
    }
    case 'right': {
      if (this.x === (row * 5)) {
          return;
      };

      this.x += row;
      console.log('x ' + this.x + ' y ' + this.y);
      break;
    }
    case 'up': {
      this.y -= col;
      if (this.y <= 0) {
        setTimeout(reset, 100);
      };

      console.log('x ' + this.x + ' y ' + this.y);
      break;
    }
    case 'down': {
      if (this.y >= (col * 4)) {
        return;
      }

      this.y += col;
      console.log('x ' + this.x + ' y ' + this.y);
      break;
    }
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var createEnemies = function(min, max) {
  for (var i = 0; i < generateRandomNum(min, max); i++) {
    allEnemies.push(new Enemy());
  };
};
createEnemies(1, 5);
// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
