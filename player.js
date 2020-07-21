class Player {
    constructor() {
    this.x = 0;
    this.w = width/20;
    this.h = this.w;
    this.y = height-this.h;
  }
  
  display() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
  
  move() {
    if (mouseX == 0 && mouseY == 0) {
      this.x = width/2;
      this.y = height-this.h;
    } else {
      this.x = mouseX;
      this.y = mouseY;
    }
  }
}
