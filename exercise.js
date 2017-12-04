// Playground

// Generate random x coordinate from 0 to 1920
function getRandomX() {
  return Math.floor(Math.random()*1921);
}

// Generate random y coordinate from 0 to 1080
function getRandomY() {
  return Math.floor(Math.random()*1081);
}

// Generate random radius from 1 to 100
function getRandomRadius() {
  return Math.floor(Math.random()*100)+1;
}

// Create 40 randomly sized and located circles, assign color
for (var i=0; i<40; i++) {
  new Path.Circle(new Point(getRandomX(), getRandomY()), getRandomRadius()).fillColor = 'seagreen';
}