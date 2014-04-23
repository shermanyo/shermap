
// Note: definitions from loadAPI() and load() calls are inherited in included scripts

loadAPI(1);

// helper functions and constants
load("sherman_lib.js");

LOG("#######################################################");
LOG("Loading shermap.control.js ...");
LOG("#######################################################");


load("quneo.ctlmap.js");
var ctrlmap = new QuneoCtlMap();


host.defineController("sherman", "shermap", "1.0", "d4be8270-ba4d-11e3-a5e2-0800200c9a66");
host.defineMidiPorts(1, 1);


function resetDevice()
{
	LOG("shermap: resetDevice()");
}




//
// Callbacks
//

function init()
{
	LOG("shermap: init()");

	host.getMidiInPort(0).setMidiCallback(onMidi);
	host.getMidiInPort(0).setSysexCallback(onSysex);

	


	resetDevice();

	host.showPopupNotification("shermap loaded");
}


function exit()
{
	LOG("shermap: exit()");
}


function onMidi(status, data1, data2)
{
	LOG("shermap: onMidi(" + status + "," + data1 + "," + data2 + ") ...");

	if(isNoteOn(status)) {
		ctrlmap.NoteOn(data1, data2);
	} else if(isNoteOff(status)) {

	} else if(isChannelController(status)) {

	}
	LOG("shermap: onMidi() done");
	return;
}


function onSysex(data)
{
	LOG("shermap: onSysex()");
}

LOG("#######################################################");
LOG("Finished loading shermap.control.js ...");
LOG("#######################################################");


