// Now write your own player class
class Player extends Character {
  constructor() {
    let x = (row * 3);
    let y = (col * 4);
    let imageUrl = 'images/char-boy.png';

    super(x, y, imageUrl);
  }

  reset() {
    player = new Player();
  }

  update() {
    if (isGameOver) {
      this.reset();
      isGameOver = false;
    }
  }

  handleInput(allowedKeys) {
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
  }
}
