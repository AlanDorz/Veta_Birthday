let img;
function preload() {
  img = loadImage('veta-black.png');
}

function setup() {
  createCanvas(375, 500, WEBGL)
}

function draw() {
  background('#f1f1f1');
  fill(0)
  noStroke()
  
  let tiles = map(mouseX, 0, 500, 0, 100);
  // let tiles = 50
  let tileSize = width/tiles;
  
  push();
  
  translate(0, 0, -100)
  rotateY(radians(frameCount))
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      
      let c = img.get(round(x * tileSize), round(y * tileSize));
      let b = map(brightness(c), 0, 255, 0, 3);
      let z = map(b, 0 , 3, -100, 200);
      
      push();
      translate(x*tileSize-width/2, y*tileSize-height/2.5, z);
      // ellipse(0, 0, tileSize*b, tileSize*b, 50)
      sphere(tileSize*b*0.4, 3, 4)
      pop();
      
      // ellipse(x * tileSize, y * tileSize, 10, 10);
      
      
    }
  }
  pop();
}