// Enemies our player must avoid
class Enemy extends Character {
  constructor() {
    let x = -(row);
    let y = generateRandomNum(1, 3) * col;
    let imageUrl = 'images/enemy-bug.png';
    super(x, y, imageUrl);

    this.speed = generateRandomNum(50, 500);
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    this.movement = Math.round(this.speed * dt);
    this.x = this.x + this.movement;

  //Check collision with player and reset if true
    let inRightScope = (this.x+row) >= player.x;
    let inLeftScope = ((this.x-row) - player.x) <= 0;

    if ((inRightScope && inLeftScope) && (this.y === player.y)) {
      isGameOver = true;
    // var y = generateRandomNum(1, 3) * col;
    // this.init(-(row), y);
    }

    //Reset Bugs location when passed the game area
    if (this.x > ctx.canvas.width) {
      let y = generateRandomNum(1, 3) * col;
      this.init(-(row), y);
    }
  }
}
