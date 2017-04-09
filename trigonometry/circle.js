window.onload = function() {

	var canvas 	= document.getElementById('canvas'),
		context = canvas.getContext('2d'),

		width 	= canvas.width 	= window.innerWidth,
		height 	= canvas.height = window.innerHeight,

		centerX = width/2,
		centerY = height/2, //center of the canvas
		radius 	= 200,
		angle	= 0,
		speed	= .01,
		x, y;

		render3();

		/**
			Object that moves in CIRCLE:

			We define relative center coordintates (centerX and CenterY) 
			Then as we do some trigonometry we can say that in order to 
			get the position of an object within the limits of our circle
			is => sin A = (y/hyp) = (y/radius)
			
			so we clear the formula into: sin(A)*radius = y

		**/

		function render1(){

			context.clearRect(0,0, width, height);

			x = centerX + Math.cos(angle) * radius;
			y = centerY + Math.sin(angle) * radius;
			
			context.beginPath();
			context.arc(x, y, 10, 0, Math.PI * 2, false);
			context.fill();

			angle += speed;
			requestAnimationFrame(render1);
		};

		/**
			Object that moves in ELIPSE:
		**/

		var xRadius = 100,
			yRadius = 300;

		function render2(){

			context.clearRect(0,0, width, height);

			x = centerX + Math.cos(angle) * xRadius;
			y = centerY + Math.sin(angle) * yRadius;
			
			context.beginPath();
			context.arc(x, y, 10, 0, Math.PI * 2, false);
			context.fill();

			angle += speed;
			requestAnimationFrame(render2);
		};
		/**
			Circular Arrangement
		**/
		function render3(){

			var numObjects 	= 10,
				slice		= Math.PI * 2/numObjects;	//Math.PI * 2 === 360 degrees

			for(var i=0; i<numObjects; i++){
				angle = i*slice;

				x = centerX + Math.cos(angle) * radius;
				y = centerY + Math.sin(angle) * radius;
				
				context.beginPath();
				context.arc(x, y, 10, 0, Math.PI * 2, false);
				context.fill();
			}
		};
};