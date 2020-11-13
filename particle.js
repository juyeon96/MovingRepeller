// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 0));
    this.acc = createVector(0, 0);
    this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(f) {
    this.acc.add(f);
  }

  // Method to update pos
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2;

    this.vel.limit(5);
  }

  // Method to display
  display() {
    let r = random(1);

    if(r < 0.3) {
      stroke(255, this.lifespan);
      strokeWeight(2);
      fill(255, this.lifespan);
      ellipse(this.pos.x, this.pos.y, 12, 12);
    }

    else if(r < 0.6) {
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

    else {
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

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
