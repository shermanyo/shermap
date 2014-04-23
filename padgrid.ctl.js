LOG("loading padgrid.ctl.js");

load('iCtl.js');

function PadGrid(buttonCount) {
	LOG("PadGrid(" + buttonCount + ")");
	iCtl.apply(this, arguments);

	this.typeID = 'PadGrid';

	// MMM MMM MMM based on incoming midi note
	// override empty iCtl implementation
	this.onNoteOn = function(pad_index, value) {
		// note handler
		this.playNote(pad_index);
		return true;
	};
	this.onNoteOff = function(pad_index) {
		// note handler
		return true;
	};

	this.playNote = function(pad_index) {
		var note_val = pad_index + 36;
		LOG("Pad Note - " + note_val);
	}

}

//PadGrid.prototype = new iCtl;
PadGrid.prototype = (function(parent, child){
	function protoCreator(){
		this.constructor = child.prototype.constructor;
	};
	protoCreator.prototype = parent.prototype;
	return new protoCreator();
})(iCtl, PadGrid);
PadGrid.prototype.constructor = PadGrid;
PadGrid.prototype.parent = PadGrid.prototype;


LOG("padgrid.ctl.js loaded");

