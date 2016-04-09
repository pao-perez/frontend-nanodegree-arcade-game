//Super Class Character
class Character {
  constructor(x, y, imageUrl) {
    this.init(x, y);
    this.sprite = imageUrl;
  }

  init(x, y) {
    this.x = x;
    this.y = y;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}
