let img;
let cimg;
function preload() {
  img = loadImage('veta-full-high.png');
  cimg = loadImage('circle.svg');
  wishes = loadImage('wishes.svg');
}

function setup() {
  let myCanvas = createCanvas(750, 1000, WEBGL);
  myCanvas.parent("canvas");
}

function draw() {
  background('#f1f1f1');

  fill(0)
  noStroke()
  
  let tiles = map(mouseX, 0, width, 0, 120, true);
  // let tiles = 50
  let tileSize = width/tiles;
  
  push();
  
  translate(0, 0, -100)
  rotateY(radians(map(mouseX, 0, width/2, 300, 0, true)))
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      
      let c = img.get(round(x * tileSize), round(y * tileSize));
      let b = map(brightness(c), 0, 255, 1, 0);
      let z = map(b, 0 , 3, -450, 900);
      
      push();
      translate(x*tileSize-width/2.2, y*tileSize-height/2.2, z);
      fill(c)
      // ellipse(0, 0, tileSize*b, tileSize*b, 50)
      // sphere(tileSize*b*0.9, 3, 4)
      sphere(tileSize*b*0.6)
      // box(tileSize*b*0.8)
      pop();
      
      // ellipse(x * tileSize, y * tileSize, 10, 10);
      
      
    }
  }
  pop();

  push()
  let yCircle = map(mouseX, 0, width / 2, -500, 0, true)
  translate(40, -225 + yCircle)
  // rotateZ(radians(frameCount*0.5))
  // image(cimg, 40, -225, 328.5, 320.5)
  image(cimg, -328.5 / 2, -320.5/2, 328.5, 320.5)
  pop()

  push()
  translate(-width/2 - 493/2, 0)
  let yWishes = map(mouseX, 0, width / 2, 500, 0, true)
  image(wishes, width/2, height/3+yWishes)
  pop()
}

hoverOff = document.querySelector('hover-off')
hoverOn = document.querySelector('hover-on')
