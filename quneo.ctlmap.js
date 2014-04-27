LOG("loading quneo.ctlmap.js");

load('iCtlMap.js');

load('pageset.ctl.js');
load('padgrid.ctl.js');
load('shiftbtn.ctl.js');
load('transport.ctl.js');
load('mixer.ctl.js');

QuneoCtlMap.prototype = new iCtlMap;
QuneoCtlMap.prototype.constructor = QuneoCtlMap;

function QuneoCtlMap() {

  this.ctl_set = initArray(null, 5);


	this.ctl_set[0] = new PadGrid(16);
	this.ctl_set[0].setNoteArray([36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);

	this.ctl_set[1] = new PageSet(4);
	this.ctl_set[1].setNoteArray([19, 20, 21, 22]);

	this.ctl_set[2] = new ShiftBtn(1);
	this.ctl_set[2].setNote(0, 18);

	this.ctl_set[3] = new Transport(3);
	this.ctl_set[3].setNoteArray([24, 25, 23]);

	this.ctl_set[4] = new Mixer(4);
	this.ctl_set[4].setCCArray([0, 1, 2, 3]);


}


QuneoCtlMap.prototype.NoteOn = function(note_val, velocity) {
	if(this.ctl_set[0].getNoteIndex(note_val) >= 0) {
		var ctl_index = this.ctl_set[0].noteOn(note_val, velocity);
		LOG("Pad" + ctl_index + ": On - Pad: " + this.ctl_set[0].getNoteIndex(note_val));
	} else if(this.ctl_set[1].getNoteIndex(note_val) >= 0) {
		var ctl_index = this.ctl_set[1].noteOn(note_val, velocity);
		LOG("Page" + ctl_index + ": On - Page: " + this.ctl_set[1].getPage());

	} else if(this.ctl_set[2].getNoteIndex(note_val) >= 0) {
		var ctl_index = this.ctl_set[2].noteOn(note_val, velocity);
		LOG("Shift" + ctl_index + ": On - Shifted: " + this.ctl_set[2].getState());

	} else if(this.ctl_set[3].getNoteIndex(note_val) >= 0) {
		var ctl_index = this.ctl_set[3].noteOn(note_val, velocity);
		LOG("Transport " + ctl_index + ": On - Control: " + this.ctl_set[3].getNoteIndex(note_val));

	}

  return null;
};

QuneoCtlMap.prototype.CCUpdate = function(cc_in, value) {
	if(this.ctl_set[4].getCCIndex(cc_in) >= 0) {
		var ctl_index = this.ctl_set[4].updateCC(cc_in, value);
		LOG("Mixer" + ctl_index + ": " + this.ctl_set[4].getCtlValue(ctl_index));

	}

	return null;
}

QuneoCtlMap.prototype.hasPads = function() {
  return 16;
}

QuneoCtlMap.prototype.hasPages = function() {
  return 4;
};

QuneoCtlMap.prototype.hasShift = function() {
  return 1;
};




LOG("quneo.ctlmap.js loaded");


