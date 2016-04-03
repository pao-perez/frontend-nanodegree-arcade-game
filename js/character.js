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
