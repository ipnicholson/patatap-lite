// keys with corresponding sounds and colors
var keyData = {
  q: {
		sound: new Howl({
  		src: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		src: ['sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		src: ['sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		src: ['sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		src: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		src: ['sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		src: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		src: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			src: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		src: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		src: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		src: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		src: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		src: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		src: ['sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		src: ['sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		src: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		src: ['sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		src: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		src: ['sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		src: ['sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
};

var animatedCircles = [];

// Generate random radius from min to max
function getRandomRadius(min, max) {
  return Math.floor(Math.random()*(max-min)+min+1);
}

// Create circles, play sound
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

