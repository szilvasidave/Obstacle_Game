class Obstacle {
  constructor() {
    lastCol = random([0, 1, 2].filter(item => item != lastCol));
    this.x = ((width / 3) * lastCol);
    this.w = width / 3;
    this.h = random(height / 15, height / 10);
    this.y = -this.h;
    this.RGB = random([
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255]
    ]);
  }

  display() {
    fill(this.RGB);
    rect(this.x, this.y, this.w, this.h);
  }

  fall() {
    this.y += fallSpeed;
  }

  hits(player) {
    if ((player.y > this.y && player.y < this.y + this.h) || (player.y + player.h > this.y && player.y + player.h < this.y + this.h)) {
      if ((player.x > this.x && player.x < this.x + this.w) || (player.x + player.w > this.x && player.x + player.w < this.x + this.w)) {
        return true;
      }
    }
    return false;
  }


  offscreen() {
    if ((this.y) > height) {
      return true;
    } else {
      return false;
    }
  }


}