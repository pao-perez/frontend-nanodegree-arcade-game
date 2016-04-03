var row = 83;
var col = 101;
var isGameOver = false;
var allEnemies = [];

var generateRandomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var createEnemies = function(min, max) {
  for (var i = 0; i < generateRandomNum(min, max); i++) {
    allEnemies.push(new Enemy());
  }
};
