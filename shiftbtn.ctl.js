LOG("loading shiftbtn.ctl.js");

load('iCtl.js');

function ShiftBtn(buttonCount) {
	LOG("ShiftBtn(" + buttonCount + ")");
	iCtl.apply(this, arguments);

	this.typeID = 'ShiftBtn';

	// internal Shift state
	this.currentState = false;
	this.getState = function() {
		return this.currentState;
	};

	// Toggle shift state based on incoming midi note
	// override empty iCtl implementation
	this.onNoteOn = function(ctl_index, value) {
		this.toggleShift();
		return true;
	};

	// Toggle current shift state
	this.toggleShift = function() {
		this.currentState = !this.currentState;
		LOG("Shift - " + this.currentState);
	};

}

//ShiftBtn.prototype = new iCtl;
ShiftBtn.prototype = (function(parent, child){
	function protoCreator(){
		this.constructor = child.prototype.constructor;
	};
	protoCreator.prototype = parent.prototype;
	return new protoCreator();
})(iCtl, ShiftBtn);
ShiftBtn.prototype.constructor = ShiftBtn;


LOG("shiftbtn.ctl.js loaded");
