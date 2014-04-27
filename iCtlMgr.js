LOG("loading iCtlMgr.js");

function iCtlMgr(ctl_count) {

}



// note on handler
iCtlMgr.prototype.NoteOn = function(note_in, velocity) {

	return null;
};

// note off handler
iCtlMgr.prototype.NoteOff = function(note_in) {

	return null;
};

// cc value change handler
iCtlMgr.prototype.CCUpdate = function(cc_in, value) {

	return null;
};

// generic midi handler
iCtlMgr.prototype.MidiIn = function(status, data1, data2) {

	return null;
};


iCtlMgr.prototype.hasPads = function() {
	return -1;
};

iCtlMgr.prototype.hasPages = function() {
	return -1;
};

iCtlMgr.prototype.hasShift = function() {
	return -1;
};





LOG("iCtlMgr.js loaded");


