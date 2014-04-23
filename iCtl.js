LOG("loading iCtl.js");

function iCtl(ctl_count) {
  LOG("iCtl(" + ctl_count + ")");

	this.typeID = null;

	this.getTypeID = function() {
		return this.typeID;
	}

	this.ctlNoteArray = initArray(-1, ctl_count);
	this.is_note_ctl = false;

	this.ctlCCArray = initArray(-1, ctl_count);
	this.is_cc_ctl = false;


	this.count = ctl_count;

	this.getCtlCount = function() {
		return this.count;
	}


}

//
// Overridden in implementation - event is relative to control index
//

iCtl.prototype.onNoteOn = function(ctl_index, value) {
	return;
} 
iCtl.prototype.onNoteOff = function(ctl_index) {
	return;
} 
iCtl.prototype.onUpdateCC = function(ctl_index, value) {
	return;
} 


//
// Ctl functions
//

iCtl.prototype.setNoteArray = function(note_array) {
	for(var i = 0; i < note_array.length; i++) {
	  if(i >= this.ctlNoteArray.length) {
			break;
	  }
	  if(note_array[i] >= 0 && note_array[i] <= 127) {
			this.ctlNoteArray[i] = note_array[i];
	  }
	}
	this.is_cc_ctl = false;
	this.is_note_ctl = true;
} 

iCtl.prototype.setCCArray = function(cc_array) {
	for(var i = 0; i < cc_array.length; i++) {
	  if(i >= this.ctlCCArray.length) {
			break;
	  }
	  if(cc_array[i] >= 0 && cc_array[i] <= 127) {
			this.ctlCCArray[i] = cc_array[i];
	  }
	}
	this.is_note_ctl = false;
	this.is_cc_ctl = true;
} 



iCtl.prototype.setNote = function(index, note) {
	if(index >= 0 && index <= this.count) {
		if(note >= 0 && note <= 127) {
			this.ctlNoteArray[index] = note;
		}
	}
	this.is_cc_ctl = false;
	this.is_note_ctl = true;
} 

iCtl.prototype.setCC = function(index, cc) {
	if(index >= 0 && index <= this.count) {
		if(cc >= 0 && cc <= 127) {
			this.ctlCCArray[index] = cc;
		}
	}
	this.is_note_ctl = false;
	this.is_cc_ctl = true;
} 



iCtl.prototype.getNoteIndex = function(note) {
	for(var i = 0; i < this.count; i++) {
	  if(note == this.ctlNoteArray[i]) {
			return i;
	  }
	}
	return -1;
} 

iCtl.prototype.getCCIndex = function(cc) {
	for(var i = 0; i < this.count; i++) {
	  if(note == this.ctlNoteArray[i]) {
			return i;
	  }
	}
	return -1;
} 


iCtl.prototype.noteOn = function(note, velocity) {
	if(this.is_note_ctl != true) {
		return -1;
	}

	var ctl_index = this.getNoteIndex(note);
	if(ctl_index == -1) {
		return -1;
	}

	this.onNoteOn(ctl_index, velocity);

	return ctl_index;
}

iCtl.prototype.noteOff = function(note) {
	if(this.is_note_ctl != true) {
		return -1;
	}

	var ctl_index = this.getNoteIndex(note);
	if(ctl_index == -1) {
		return -1;
	}

	this.onNoteOff(ctl_index);

	return ctl_index;

}

iCtl.prototype.updateCC = function(cc, value) {
	if(is_cc_ctl != true) {
		return -1;
	}

	var ctl_index = this.getCCIndex(cc);
	if(ctl_index == -1) {
		return -1;
	}

	this.onUpdateCC(ctl_index, value);

	return ctl_index;

}



LOG("iCtl.js loaded");
