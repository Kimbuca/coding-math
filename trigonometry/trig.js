window.onload = function() {

	var canvas 	= document.getElementById('canvas'),
		context = canvas.getContext('2d'),

		width 	= canvas.width 	= window.innerWidth,
		height 	= canvas.height = window.innerHeight;

	var centerY 	= height * .5,
		centerX 	= width  * .5,   //centered in the middle
		baseRadius	= 100,
		baseAlpha	= 0.5,
		offset		= height * .4,
		speed 		= 0.025,
		angle 		= 0;

	render();

	function render() {
		var y 		= centerY + Math.sin(angle) * offset; //goes from -offset to +offset
		var radius 	= baseRadius + Math.sin(angle) * 50;
		var alpha 	= baseAlpha + Math.sin(angle) * 0.5; //ranges from 0.0 to 1.0

		context.fillStyle = "rgba(0, 0, 0, " +alpha +")";

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(centerX, y, 100, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;

		requestAnimationFrame(render);

	}


};