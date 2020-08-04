// preset vars for functions

var number = 0;
var cat = null;
var x = "";
var y = "";

// returns random number above 0 up to number provided as n for function
// returns clost whole number less then number provided bt math.random

function randomN(n){
	number = parseInt((Math.random() * n) + 1 );
	return number;
};

//testing for functions

$("#testBtn").click(function(){
	x = "";
	y = "";
	randomN(3);
	console.log(components[number]);
	cat = components[number];
	if (cat === "flip"){
		flipCheck();
		document.getElementById("testDIV").innerHTML
		= '<p>'+ x + y +'</p>'
	} else if (cat === "shuv"){
		shuvCheck();
		document.getElementById("testDIV").innerHTML
		= '<p>'+ x + y + cat+'</p>'
	} else if (cat === "turn") {
		turnCheck();
		document.getElementById("testDIV").innerHTML
		= '<p>'+ x + y +'</p>'
	};

});

//check against flip array

function flipCheck(){
	randomN(2);
	x = flip[number];
	trick = {x}
	return trick;
};

//check against shuv array and shuvrotation

function shuvCheck(){
	randomN(2);
	x = shuv[number];
	randomN(3);
	y = shuvRotation[number];
	trick = {x,y}
	return trick;
};

//check against turn array and turnrotation

function turnCheck(){
	randomN(2);
	x = turn[number];
	randomN(2);
	y = turnRotation[number];
	trick = {x,y}
	return trick;
};