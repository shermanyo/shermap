LOG("loading iCtlMap.js");

function iCtlMap() {

	this.pads = null;

	this.pages = null;

	this.shiftbtn = null;

}



iCtlMap.prototype.NoteOn = function(note_in, velocity) {

	return null;
}

iCtlMap.prototype.NoteOff = function(note_in) {

	return null;
}

iCtlMap.prototype.CCUpdate = function() {

	return null;
}


iCtlMap.prototype.hasPads = function() {
	return -1;
}

iCtlMap.prototype.hasPages = function() {
	return -1;
}

iCtlMap.prototype.hasShift = function() {
	return -1;
}





LOG("iCtlMap.js loaded");


