LOG("loading transport.ctl.js");

load('iCtl.js');

var TRANSPORT_STOP = 0;
var TRANSPORT_PLAY = 1;
var TRANSPORT_RECORD = 2;

function Transport(buttonCount) {
	LOG("Transport(" + buttonCount + ")");
	iCtl.apply(this, arguments);

	this.typeID = 'Transport';

	this.transport = host.createTransport();

	this.onNoteOn = function(ctl_index, value) {
		if(ctl_index == TRANSPORT_STOP) {
			this.Stop();
		} else if(ctl_index == TRANSPORT_PLAY) {
			this.Play();
		} else if(ctl_index == TRANSPORT_RECORD) {
			this.Record();
		}
		return true;
	};

	this.Play = function() {
		this.transport.play();
		LOG("Transport - Play");
	};

	this.Stop = function() {
		this.transport.stop();
		LOG("Transport - Stop");
	};

	this.Record = function() {
		this.transport.record();
		LOG("Transport - Record");
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

