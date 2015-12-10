/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

function Item(name, description) {
	this.name = name;
	this.description = description;
}

Item.prototype.toString = function () {
	return "The " + this.name + "is " + this.description;
}

var pendant = new Item("Pendant       ", "A shiny, cross shaped pendant.");
var amulet = new Item("Amulet       ", "A jeweled circulaur amulet.");
var ancientStaff = new Item("Ancient Staff     ", "The Ancient Staff of the Great King Abbubakar!");
var missingMap = new Item("Missing Map Piece ", "A bottle in the water with a map that reveals the secret temple under the statue.");
var driftwood = new Item("Driftwood ", "A piece of driftwood washed up onto the beach from the sea.");