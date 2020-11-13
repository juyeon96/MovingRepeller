// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;
let repeller;
let systems = [];

function setup() {
  createCanvas(640, 360);
  ps = new ParticleSystem(createVector(width / 2, 50));
  repeller = new Repeller(width / 2, height / 2);
}

function draw() {
  background(51);

  for(let i = 0; i < systems.length; i++) {
    systems[i].addParticle();
    systems[i].applyRepeller(repeller);
    systems[i].run();
  }

  ps.addParticle(mouseX, mouseY);

  // Apply gravity force to all Particles
  let gravity = createVector(0, 0.02);
  ps.applyForce(gravity);

  let power = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
  repeller.applyForce(power);

  repeller.update();
  repeller.edges();
  repeller.display();

  ps.applyRepeller(repeller);
  ps.run();
}

function mousePressed() {
  systems.push(new ParticleSystem(createVector(mouseX, mouseY)));
}
