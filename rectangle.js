class Rectangle extends Particle {
  display() {
    rectMode(CENTER);
    fill(255, this.lifespan);
    stroke(255, this.lifespan);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    let theta = map(this.pos.x, 0, width, 0, TWO_PI * 2);
    rotate(theta);
    rect(0, 0, 12, 12);
    pop();
  }
}
