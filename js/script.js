// preset vars for functions

var number = 0; // base var for random numbers
var cat = null; // base var for which part of trick to add each round
var trickStance = ""; // base var for which stance each round 
var newFlipTrick = [];
var newShuvTrick = [];
var newTurnTrick = [];
var addShuv = null;
var addTurn = null;
var addFlip = null;

function resetVar(){
	addShuv = null;
	addTurn = null;
	addFlip = null;
	newFlipTrick = [];
	newShuvTrick = [];
	newTurnTrick = [];
}

// returns random number above 0 up to number provided as n for function
// returns clost whole number less then number provided bt math.random

function randomN(n){
	number = parseInt((Math.random() * n) + 1 );
	return number;
};

//check for an easy trick

$("#testBtnEasy").click(function(){
	resetVar();
	randomN(4);
	trickStance = stance[number];
	randomN(3);
	cat = components[number];
	trickCheck(cat,0,0,0);
	if (addTurn === true) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newTurnTrick[0].x + " " + newTurnTrick[0].y + "</p>"
	} else if (addShuv === true) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newShuvTrick[0].x + " " + newShuvTrick[0].y + " Shuv</p>"
	} else if (addFlip === true) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newFlipTrick[0].x + " </p>"
	};
});

//check for a medium trick

$("#testBtnMed").click(function(){
	resetVar();
	randomN(4); 
	trickStance = stance[number];
	randomN(3);
	var cat = components[number];
	components.splice(number, 1);
	trickCheck(cat,1,2,1);
	randomN(2);
	var cat = components[number];
	trickCheck(cat,1,2,1);
	components = [null,'flip','shuv','turn'];
	if ((addTurn === true) && (addShuv === true)) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newTurnTrick[0].x + " " + newTurnTrick[0].y + " " + newShuvTrick[0].x + " " + newShuvTrick[0].y + " Shuv</p>"
	} else if ((addTurn === true) && (addFlip === true)) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newTurnTrick[0].x + " " + newTurnTrick[0].y + " " + newFlipTrick[0].x + "</p>"
	} else if ((addShuv === true) && (addFlip === true)) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newFlipTrick[0].x + " " + newShuvTrick[0].x + " " + newShuvTrick[0].y + " Shuv</p>"
	};
});

//check for a medium trick

$("#testBtnHard").click(function(){
	resetVar();
	randomN(4); 
	trickStance = stance[number];
	randomN(3);
	var cat = components[number];
	components.splice(number, 1);
	trickCheck(cat,1,3,2);
	randomN(2);
	var cat = components[number];
	trickCheck(cat,1,3,2);
	components = [null,'flip','shuv','turn'];
	if ((addTurn === true) && (addShuv === true)) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newTurnTrick[0].x + " " + newTurnTrick[0].y + " " + newShuvTrick[0].x + " " + newShuvTrick[0].y + " Shuv</p>"
	} else if ((addTurn === true) && (addFlip === true)) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newTurnTrick[0].x + " " + newTurnTrick[0].y + " " + newFlipTrick[0].x + "</p>"
	} else if ((addShuv === true) && (addFlip === true)) {
		document.getElementById("testDIV").innerHTML
		= "<p>"+ trickStance + " " + newFlipTrick[0].x + " " + newShuvTrick[0].x + " " + newShuvTrick[0].y + " Shuv</p>"
	};
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

function turnCheck(z,w,){
	randomN(z);
	x = turn[number];
	randomN(w);
	y = turnRotation[number];
	trick = {x,y}
	return trick;
};

//check trick and print in body

function trickCheck(cat,n,m,o){
	if (cat === "flip"){
		flipCheck(2,n);
		newFlipTrick.push(trick);
		addFlip = true;
	} else if (cat === "shuv"){
		shuvCheck(2,m);
		newShuvTrick.push(trick);
		addShuv = true;
	} else if (cat === "turn") {
		turnCheck(2,o);
		newTurnTrick.push(trick);
		addTurn = true;
	};
};