// preset vars for functions

var number = 0; // base var for random numbers
var cat = null; // base var for which part of trick to add each round
var trickStance = ""; // base var for which stance each round
var x = ""; // base var for compon
var y = ""; // base var for compon
var newTrick = [];
var addShuv = null;

// returns random number above 0 up to number provided as n for function
// returns clost whole number less then number provided bt math.random

function randomN(n){
	number = parseInt((Math.random() * n) + 1 );
	return number;
};

//check for an easy trick

$("#testBtnEasy").click(function(){
	newTrick = [];
	randomN(4);
	trickStance = stance[number];
	randomN(3);
	cat = components[number];
	trickCheck(cat,0);
	console.log(newTrick);
	document.getElementById("testDIV").innerHTML
	= "<p>"+ newTrick[0].x + " " + newTrick[0].y +"</p>"
});

//check for a medium trick

$("#testBtnMed").click(function(){
	newTrick = [];
	randomN(4); 
	trickStance = stance[number];
	randomN(3);
	var cat = components[number];
	components.splice(number, 1);
	trickCheck(cat,2);
	randomN(2);
	var cat = components[number];
	trickCheck(cat,2);
	console.log(newTrick)
	components = [null,'flip','shuv','turn'];
	document.getElementById("testDIV").innerHTML
	+= "<p>"+ newTrick[0].x + " " + newTrick[0].y +"</p>"
	+ "<p>"+ newTrick[1].x + " " + newTrick[1].y +"</p>"
});

//check against flip array

function flipCheck(z,w){
	randomN(z);
	x = flip[number];
	randomN(w);
	y = number;
	trick = {x, y};
	return trick;
};

//check against shuv array and shuvrotation

function shuvCheck(z,w){
	randomN(z);
	x = shuv[number];
	randomN(w);
	y = shuvRotation[number];
	trick = {x,y}
	return trick;
};

//check against turn array and turnrotation

function turnCheck(z,w){
	randomN(z);
	x = turn[number];
	randomN(w);
	y = turnRotation[number];
	trick = {x,y}
	return trick;
};

//check trick and print in body

function trickCheck(cat,n){
	if (cat === "flip"){
		flipCheck(2,n);
		newTrick.push(trick);
	} else if (cat === "shuv"){
		shuvCheck(2,n);
		newTrick.push(trick);
		addShuv = true;
	} else if (cat === "turn") {
		turnCheck(2,n);
		newTrick.push(trick);
	};
};