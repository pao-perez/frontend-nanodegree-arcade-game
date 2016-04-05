var row = 83;
var col = 101;
var isGameOver = false;
var allEnemies = [];

var generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

var createEnemies = (min, max) => {
  for (let i = 0; i < generateRandomNum(min, max); i++) {
    allEnemies.push(new Enemy());
  }
};
