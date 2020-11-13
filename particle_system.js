// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle(x, y) {
    let r = random(1);

    if (x !== undefined && y !== undefined) {
      if (r < 0.3) {
        this.particles.push(new Particle(x, y));
      }
      else if(r < 0.6) {
        this.particles.push(new Rectangle(x, y));
      }
      else {
        this.particles.push(new Triangle(x, y));
      }
    }

    else {
      if (r < 0.3) {
        this.particles.push(new Particle(this.origin.x, this.origin.y));
      }
      else if(r < 0.6) {
        this.particles.push(new Rectangle(this.origin.x, this.origin.y));
      }
      else {
        this.particles.push(new Triangle(this.origin.x, this.origin.y));
      }
    }
  }

  run() {
    // Run every particle
    // ES6 for..of loop
    for (let particle of this.particles) {
      particle.run();
    }

    // Filter removes any elements of the array that do not pass the test
    this.particles = this.particles.filter(particle => !particle.isDead());
  }

  // A function to apply a force to all Particles
  applyForce(f) {
    for (let particle of this.particles) {
      particle.applyForce(f);
    }
  }

  applyRepeller(r) {
    for (let particle of this.particles) {
      let force = r.repel(particle);
      particle.applyForce(force);
    }
  }

}
