// NOTE: No ES6 support in paper.js

var animatedCircles = [];

alert('Press any key from A to Z 🔊')

// Generate random radius from min to max
function getRandomRadius(min, max) {
  return Math.floor(Math.random()*(max-min)+min+1);
}


// Create circles, play sound
function onKeyDown(event) { // paper.js method
	
	// Select <audio> from DOM based on keydown
	var audio = document.querySelector('audio[data-key="' + event.key +'"]');
	
  if (audio) {
    // Generate random point
    var maxPoint = new Point(view.size.width, view.size.height); // Get viewport dimensions
    var randomPoint = Point.random(); // Create random point between (0,0) and (1,1)
    var point = maxPoint * randomPoint; // Create random point betwen (0,0) and viewport size
    
    // Create circle at point
    var newCircle = new Path.Circle(point, getRandomRadius(200,400));
    newCircle.fillColor = audio.dataset.color;
		
		// Play audio
		audio.currentTime = 0; // restarts audio on same keydown
		audio.play();
    
    // Manage state
    animatedCircles.push(newCircle);
  }
}

// Change hue and shrink circles
function onFrame(event) { // onFrame is from paper.js
  for (var i=0; i<animatedCircles.length; i++) {
    var currentCircle = animatedCircles[i];
    
    // Shrink circles
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

