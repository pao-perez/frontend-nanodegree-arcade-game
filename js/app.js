var row = 83;
var col = 101;
var isGameOver = false;

var generateRandomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Super Class Character
var Character = function(x, y, imageUrl) {
  this.init(x, y);
  this.sprite = imageUrl;
};

Character.prototype.init = function(x, y) {
  this.x = x;
  this.y = y;
};

Character.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//End of Character definition

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
    //reset();
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
//End of Enemies definition

// Now write your own player class
var Player = function() {
  var imageUrl = 'images/char-boy.png';
  Character.call(this, (row * 3), (col * 4), imageUrl);
};
Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.reset = function() {
  player = new Player();
};

Player.prototype.update = function() {
  if (isGameOver) {
    this.reset();
    isGameOver = false;
  }
};

Player.prototype.handleInput = function(allowedKeys) {
  switch(allowedKeys) {
    case 'left': {
      if (this.x <= 0) {
        return;
      }

      this.x -= row;
      console.log('x ' + this.x + ' y ' + this.y);
      break;
    }
    case 'right': {
      if (this.x === (row * 5)) {
        return;
      }

      this.x += row;
      console.log('x ' + this.x + ' y ' + this.y);
      break;
    }
    case 'up': {
      this.y -= col;
      if (this.y <= 0) {
        setTimeout(function() {
          isGameOver = true;
        }, 100);
      }

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

var allEnemies = [];
var createEnemies = function(min, max) {
  for (var i = 0; i < generateRandomNum(min, max); i++) {
    allEnemies.push(new Enemy());
  }
};
createEnemies(1, 5);

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
