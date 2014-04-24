
// Global debug / logging flag
var SCRIPT_DEBUG = true;
function setLOG(enabled) {
	SCRIPT_DEBUG = enabled;
}

// Midi constants
var MIDI_STATUS_NOTE_ON  = 144;
var MIDI_STATUS_NOTE_OFF = 128;


// Used internally, not meant to map to hardware in any meaningful way
var Colour = {
        OFF:0,
        ON:1,
        RED:2,
        GREEN:3,
        ORANGE:4
};


function LOG(msg) {
   if(SCRIPT_DEBUG) {
	   println("LOG: " + msg);
   }

}


	

function printObjectNames(object) {
	var objects = [];
	for (var item in object) {
		objects.push(item + "");
	}
	objects = objects.sort();
	for (var c = 0; c < objects.length; c++) {
		println(objects[c]);
	}
}



LOG("sherman_lib.js loaded");

