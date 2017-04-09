// ++ How Arc-somethin works? 
// sin(30) = 0.5
// arcsin(0.5) = 30

// If you know the lengths of any two sides of a right triangle
// with arcs you can know either or both angles from a right triangle

// cos = (adj/hyp)  arcos(adj/hyp) = degree between (adj-hyp)


/**
	Using Arctan to ROTATE an Arrow

	Now the transformations that will take place will look like: T -> R
	Context will be rotated and then restaured

**/
window.onload = function() {

	var canvas 	= document.getElementById('canvas'),
		context = canvas.getContext('2d'),

		width 	= canvas.width 	= window.innerWidth,
		height 	= canvas.height = window.innerHeight,

		arrowX	= width/2,
		arrowY 	= height/2,
		dx, dy,			// distance of the arrow to the mouse
		angle 	= 0; 	//calculated on mouse pos

		render();

		function render(){
			
			context.clearRect(0,0, width, height);
			
			context.save();
			context.translate(arrowX, arrowY);
			context.rotate(angle);

			context.beginPath();

			context.moveTo(20,0);
			context.lineTo(-20, 0);
			context.moveTo(20,0);
			context.lineTo(10, -10);
			context.moveTo(20,0);
			context.lineTo(10, 10); //arrow
			context.stroke();

			context.restore();
			requestAnimationFrame(render); //calls render over and over

		}

	document.body.addEventListener("mousemove", function(event){

		dx = event.clientX - arrowX;
		dy = event.clientY - arrowY;
		angle = Math.atan2(dy, dx); //as an alternative to atan(dy/dx)
	});
}