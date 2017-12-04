var keyData = {
  a: {
    color: 'red',
    sound: new Howl({
      src: ['sounds/bubbles.mp3']
    })
  }
};



var animatedCircles = [];

// Generate random radius from min to max
function getRandomRadius(min, max) {
  return Math.floor(Math.random()*(max-min)+min+1);
}

function onKeyDown(event) { // paper.js method
  if (keyData[event.key]) {
    // Generate random point
    var maxPoint = new Point(view.size.width, view.size.height); // Get viewport dimensions
    var randomPoint = Point.random(); // Create random point between (0,0) and (1,1)
    var point = maxPoint * randomPoint; // Create random point betwen (0,0) and viewport size
    
    // Create circle at point
    var newCircle = new Path.Circle(point, getRandomRadius(200,400));
    newCircle.fillColor = keyData[event.key].color;
    
    // Play corresponding sound
    var sound = keyData[event.key].sound;
    sound.play();
    
    // Manage state
    animatedCircles.push(newCircle);
  }
}

function onFrame(event) { // onFrame is from paper.js
  // Change hue and shrink circles
  for (var i=0; i<animatedCircles.length; i++) {
    var currentCircle = animatedCircles[i];
    
    currentCircle.fillColor.hue += 1;
    currentCircle.scale(0.9);
    
    // Remove circles when they are no longer visible
    if (currentCircle.area < 1) {
      currentCircle.remove() // remove from animation, paper.js method
      animatedCircles.splice(i , 1); // remove circle from animatedCircles
      i--; // decrement i
    }
  }
}

