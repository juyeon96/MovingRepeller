class Repeller {
  constructor(x, y) {
    this.power = 150;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  display() {
    stroke(255);
    strokeWeight(2);
    fill(127);
    ellipse(this.pos.x, this.pos.y, 32, 32);
  }

  repel(p) {
    let dir = p5.Vector.sub(this.pos, p.pos); // Calculate direction of force
    let d = dir.mag(); // Distance between objects
    dir.normalize(); // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    d = constrain(d, 1, 100); // Keep distance within a reasonable range
    let force = -1 * this.power / (d * d); // Repelling force is inversely proportional to distance
    dir.mult(force); // Get force vector --> magnitude * direction
    return dir;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }

  edges() {
    if(this.pos.y > height|| this.pos.y < 0) {
      this.vel.y *= -1;

      if(this.pos.y > height)
        this.pos.y = height;
      else
        this.pos.y = 0;
    }

    if(this.pos.x > width || this.pos.x < 0) {
      this.vel.x *= -1;

      if(this.pos.x > width)
        this.pos.x = width;
      else
        this.pos.x = 0;
    }
  }
};
