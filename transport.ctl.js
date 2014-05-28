LOG("loading transport.ctl.js");

load('iCtl.js');

var TRANSPORT_PLAY = 0;
var TRANSPORT_STOP = 1;
var TRANSPORT_RECORD = 2;
var TRANSPORT_RESTART = 3;
var TRANSPORT_LOOP = 4;
var TRANSPORT_CLICK = 5;
var TRANSPORT_OVERDUB = 6;
var TRANSPORT_AUTOMATION = 7;
var TRANSPORT_REWIND = 8;
var TRANSPORT_FFWD = 9;
var TRANSPORT_PUNCH_IN = 10;
var TRANSPORT_PUNCH_OUT = 11;

var TRANSPORT_CTL_COUNT = 12;

function Transport(buttonCount) {
	LOG("Transport(" + buttonCount + ")");
	// note: the buttonCount is ignored as buttons are mapped to specific indexes
	iCtl.apply(this, [TRANSPORT_CTL_COUNT]);

	this.typeID = 'Transport';

	this.transport = host.createTransport();

	this.onNoteOn = function(ctl_index, value) {
		if(ctl_index == TRANSPORT_PLAY) {
			this.transport.play();
		} else if(ctl_index == TRANSPORT_STOP) {
			this.transport.stop();
		} else if(ctl_index == TRANSPORT_RECORD) {
			this.transport.record();
		} else if(ctl_index == TRANSPORT_RESTART) {
			this.transport.restart();
		} else if(ctl_index == TRANSPORT_LOOP) {
			this.transport.toggleLoop();
		} else if(ctl_index == TRANSPORT_CLICK) {
			this.transport.toggleClick();
		} else if(ctl_index == TRANSPORT_OVERDUB) {
			this.transport.toggleOverdub();
		} else if(ctl_index == TRANSPORT_AUTOMATION) {
			this.transport.toggleLatchAutomationWriteMode();
		} else if(ctl_index == TRANSPORT_REWIND) {
			this.transport.rewind();
		} else if(ctl_index == TRANSPORT_FFWD) {
			this.transport.fastForward();
		} else if(ctl_index == TRANSPORT_PUNCH_IN) {
			this.transport.togglePunchIn();
		} else if(ctl_index == TRANSPORT_PUNCH_OUT) {
			this.transport.togglePunchOut();
		}
		return true;
	};

}

//Transport.prototype = new iCtl;
Transport.prototype = (function(parent, child){
	function protoCreator(){
		this.constructor = child.prototype.constructor;
	};
	protoCreator.prototype = parent.prototype;
	return new protoCreator();
})(iCtl, Transport);
Transport.prototype.constructor = Transport;
Transport.prototype.parent = Transport.prototype;


LOG("transport.ctl.js loaded");

