/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

"use strict";

var inventory = [];
var breadcrumbTrail = []; //SHOULD BE REPLACED AND PUT IN PLAYER OBJECT

function showScore(descrip) {
	document.getElementById("score").innerHTML = descrip;
}

function showInfoMessage(descrip) {
	document.getElementById("infoMessages").innerHTML = descrip;
}

function displayInventory(descrip) {
	document.getElementById("inventory").innerHTML = descrip;
}

var player = {
	currentLocation: [],
	pointsEarned: 0,
	inventory: [],
	breadcrumbTrail: []
};

function Reload() {
	location.reload();
}
/*
function directionInput(direction) {
	var message = "That's not a correct input! Please enter on of the following: N,n,E,e,S,s,W,w";
	if (direction === "T" || direction ==="t") {
		take(player.currentLocation);
	} else if (direction === "I" || direction ==="i") {
		showInventory();
	} else if (direction === "P" || direction ==="p") {
		moveHistory();
	} else if (direction === "H" || direction ==="h") {
		displayHelp();
	} else if (direction === "X" || direction ==="x") {
		examine(player.currentLocation);									
	} else {
		showMessage(message);
	}
}
*/

function take(currentLocation) {
	if (locations[currentLocation].item !=0) {
		player.inventory.push(locations[currentLocation].item.name);
		showInfoMessage("Item Taken!");
		locations[currentLocation].item = 0;
	}
}

function showInventory() {
	var playerInventory = "";
	var i;
	for (i=0; i < player.inventory.length; i++) {
		playerInventory = playerInventory + player.inventory[i];
	}
	displayInventory(playerInventory);
}

function moveHistory() {
	var breadcrumb = "";
	var i;
	for (i=0; i < player.breadcrumbTrail.length; i++) {
		breadcrumb = breadcrumb + player.breadcrumbTrail[i];
	}	
	showInfoMessage(breadcrumb);
}

function displayHelp() {
	var message = "Text Commands: N/n (North)  E/e (East) S/s (South) W/w (West) T/t (Take Item) I/i (Show Inventory) P/p (Move History) H/h (Help)";
	showInfoMessage(message);
}

function updateScore(location){
if (location.visited === true) {
		player.pointsEarned += 5;
		location.visited = false;
		showScore(player.pointsEarned);
	}
}

function examine(currentLocation){
	if (locations[currentLocation].item !=0) {
		showInfoMessage("Oh you found something! " + locations[currentLocation].item.description + " Take it! It could be useful.");
	} else {
	showInfoMessage("Nothing to be found here.");
	}
}





