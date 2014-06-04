"use strict";
/*
* Bokeh background generator
* to use:
* var background = new boke( [max number of bokeh circles], [your div id] )
*/
; var bokeh = function(maxCircles,elId){
	this.generatedCircles = [],
	this.mouse = {
		Px : 0,
		Py : 0,
		Nx : 0,
		Ny : 0,
		distance: 0,
		velocity: 0
	};

	var canvas = document.getElementById(elId),
		maxCircleSize = Math.floor(window.innerWidth/6);

	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
	canvas.style.overflow = "hidden";
	canvas.style.position = "relative";

	while( canvas.hasChildNodes() ){
		canvas.removeChild(canvas.lastChild);
	}

	var self = this,
		max = maxCircles,
		loop = function(){
			for(var i = 0; i<max; i++){
				self.createRandomCircles(canvas, (window.innerHeight - maxCircleSize), (window.innerWidth - maxCircleSize), maxCircleSize);
			}
		};

	loop();
};

bokeh.prototype.createRandomCircles = function(cv,cx,cy,max){
	var self = this,
		root = 3,
		x = Math.floor(Math.random() * cx),
		y = Math.floor(Math.random() * cy),
		r = (Math.floor(Math.random() * max)) * 2,
		color = "rgba("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+", "+ Math.random() +")",
		opacity = Math.random();

	var d = document.createElement('div');
	d.style.width = r + "px";
	d.style.height = r + "px";
	d.style.position = "absolute";
	d.style.borderRadius = "50%";
	d.style.top = x + "px";
	d.style.left = y + "px";
	d.style.border = Math.round(Math.pow(r, 1/root)) + "px solid " + color;
	d.style.background = color;
	d.style.opacity = opacity;
	d.style.boxShadow = "0 0 " + Math.round(Math.pow(r, 1/root)) * 2 + "px " + color + ", inset 0 0 " + Math.round(Math.pow(r, 1/root)) + "px " + color;

	self.generatedCircles.push(d);
	cv.appendChild(d);
};