class Triangle extends Particle {
  display() {
    fill(255, this.lifespan);
    stroke(255, this.lifespan);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    let theta = map(this.pos.x, 0, width, 0, TWO_PI * 2);
    rotate(theta);
    triangle(0, 0, 12, 0, 6, 6);
    pop();
  }
}
