LOG("loading quneo.ctlmgr.js");

load('iCtlMgr.js');

load('pageset.ctl.js');
load('padgrid.ctl.js');
load('shiftbtn.ctl.js');
load('transport.ctl.js');
load('mixer.ctl.js');

QuneoCtlMgr.prototype = new iCtlMgr;
QuneoCtlMgr.prototype.constructor = QuneoCtlMgr;

var PADS = 0;
var PAGES = 1;
var SHIFT = 2;
var TRANSPORT = 3;
var MIXER = 4;
var SENDS = 5;
var CTL_COUNT = 6;

function QuneoCtlMgr() {

	this.ctl_set = initArray(null, CTL_COUNT);


	this.ctl_set[PADS] = new PadGrid(16);
	this.ctl_set[PADS].setNoteArray([36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);

	this.ctl_set[PAGES] = new PageSet(4);
	this.ctl_set[PAGES].setNoteArray([19, 20, 21, 22]);

	this.ctl_set[SHIFT] = new ShiftBtn(1);
	this.ctl_set[SHIFT].setNote(0, 18);

	this.ctl_set[TRANSPORT] = new Transport(11);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_PLAY, 25);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_STOP, 24);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_RECORD, 23);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_REWIND, 10);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_FFWD, 11);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_PUNCH_IN, 12);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_PUNCH_OUT, 13);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_OVERDUB, 14);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_AUTOMATION, 15);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_CLICK, 16);
	this.ctl_set[TRANSPORT].setNote(TRANSPORT_LOOP, 17);

	this.ctl_set[MIXER] = new Mixer(4);
	this.ctl_set[MIXER].setCCArray([0, 1, 2, 3]);

	this.ctl_set[SENDS] = new Mixer(4);
	this.ctl_set[SENDS].setCCArray([4, 5, 6, 7]);


}


QuneoCtlMgr.prototype.NoteOn = function(note_val, velocity) {
	if(this.ctl_set[PADS].getNoteIndex(note_val) >= 0) {
		var ctl_index = this.ctl_set[PADS].noteOn(note_val, velocity);
		LOG("Pad" + ctl_index + ": On - Pad: " + this.ctl_set[PADS].getNoteIndex(note_val));
	} else if(this.ctl_set[PAGES].getNoteIndex(note_val) >= 0) {
		var ctl_index = this.ctl_set[PAGES].noteOn(note_val, velocity);
		LOG("Page" + ctl_index + ": On - Page: " + this.ctl_set[PAGES].getPage());

	} else if(this.ctl_set[SHIFT].getNoteIndex(note_val) >= 0) {
		var ctl_index = this.ctl_set[SHIFT].noteOn(note_val, velocity);
		LOG("Shift" + ctl_index + ": On - Shifted: " + this.ctl_set[SHIFT].getState());

	} else if(this.ctl_set[TRANSPORT].getNoteIndex(note_val) >= 0) {
		var ctl_index = this.ctl_set[TRANSPORT].noteOn(note_val, velocity);
		LOG("Transport " + ctl_index + ": On - Control: " + this.ctl_set[TRANSPORT].getNoteIndex(note_val));

	}

  return null;
};

QuneoCtlMgr.prototype.CCUpdate = function(cc_in, value) {
	if(this.ctl_set[MIXER].getCCIndex(cc_in) >= 0) {
		var ctl_index = this.ctl_set[MIXER].updateCC(cc_in, value);
		LOG("Mixer" + ctl_index + ": " + this.ctl_set[MIXER].getCtlValue(ctl_index));

	} else if(this.ctl_set[SENDS].getCCIndex(cc_in) >= 0) {
		var ctl_index = this.ctl_set[SENDS].updateCC(cc_in, value);
		LOG("Sends" + ctl_index + ": " + this.ctl_set[SENDS].getCtlValue(ctl_index));

	}

	return null;
}

QuneoCtlMgr.prototype.hasPads = function() {
  return 16;
}

QuneoCtlMgr.prototype.hasPages = function() {
  return 4;
};

QuneoCtlMgr.prototype.hasShift = function() {
  return 1;
};




LOG("quneo.ctlmgr.js loaded");


