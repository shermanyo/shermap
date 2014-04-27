LOG("loading mixer.ctl.js");

load('iCtl.js');

function Mixer(ctlCount) {
	LOG("Mixer(" + ctlCount + ")");
	iCtl.apply(this, arguments);

	this.typeID = 'Mixer';
	this.ctlValueArray = initArray(0, ctlCount);
	this.getCtlValue = function(ctl_index) {
		return this.ctlValueArray[ctl_index];
	};


	this.onUpdateCC = function(ctl_index, value) {
		if(ctl_index >= 0 && ctl_index < this.ctlCCArray.length) {
			this.setCtlVal(ctl_index, value);
			return ctl_index;
		}
		return true;
	};

	this.setCtlVal = function(ctl_index, value) {
		this.ctlValueArray[ctl_index] = value;
		LOG("Mixer - " + ctl_index + ": " + this.ctlValueArray[ctl_index]);
	};

}

//Mixer.prototype = new iCtl;
Mixer.prototype = (function(parent, child){
	function protoCreator(){
		this.constructor = child.prototype.constructor;
	};
	protoCreator.prototype = parent.prototype;
	return new protoCreator();
})(iCtl, Mixer);
Mixer.prototype.constructor = Mixer;
Mixer.prototype.parent = Mixer.prototype;


LOG("mixer.ctl.js loaded");

