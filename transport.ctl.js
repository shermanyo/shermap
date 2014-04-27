LOG("loading transport.ctl.js");

load('iCtl.js');

var TRANSPORT_STOP = 0;
var TRANSPORT_PLAY = 1;
var TRANSPORT_RECORD = 2;

function Transport(buttonCount) {
	LOG("Transport(" + buttonCount + ")");
	iCtl.apply(this, arguments);

	this.typeID = 'Transport';

	this.playstate = TRANSPORT_STOP;
	this.recording = false;

	this.onNoteOn = function(ctl_index, value) {
		if(ctl_index == TRANSPORT_STOP) {
			this.setStop();
		} else if(ctl_index == TRANSPORT_PLAY) {
			this.setPlay();
		} else if(ctl_index == TRANSPORT_RECORD) {
			this.toggleRecord();
		}
		return true;
	};

	this.setPlay = function() {
		this.playstate = TRANSPORT_PLAY;
		LOG("Transport - Playing");
	};

	this.setStop = function() {
		this.playstate = TRANSPORT_STOP;
		this.recording = false;
		LOG("Transport - Stopped");
	};

	this.toggleRecord = function() {
		this.recording = !this.recording;
		if(this.recording) {
			LOG("Transport - Recording Started");
		} else {
			LOG("Transport - Recording Stopped");
		}
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

