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
