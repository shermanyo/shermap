LOG("loading iCtlMap.js");

function iCtlMap(ctl_count) {

}



// note on handler
iCtlMap.prototype.NoteOn = function(note_in, velocity) {

	return null;
};

// note off handler
iCtlMap.prototype.NoteOff = function(note_in) {

	return null;
};

// cc value change handler
iCtlMap.prototype.CCUpdate = function(cc_in, value) {

	return null;
};

// generic midi handler
iCtlMap.prototype.MidiIn = function(status, data1, data2) {

	return null;
};


iCtlMap.prototype.hasPads = function() {
	return -1;
};

iCtlMap.prototype.hasPages = function() {
	return -1;
};

iCtlMap.prototype.hasShift = function() {
	return -1;
};





LOG("iCtlMap.js loaded");


