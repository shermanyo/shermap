LOG("loading pageset.ctl.js");

load('iCtl.js');

function PageSet(buttonCount) {
	LOG("PageSet(" + buttonCount + ")");
	iCtl.apply(this, arguments);

	this.typeID = 'PageSet';

	// internal Shift state
	this.currentPage = -1;
	this.getPage = function() {
		return this.currentPage;
	};

	// Toggle shift state based on incoming midi note
	// override empty iCtl implementation
	this.onNoteOn = function(ctl_index, value) {
		this.setPage(ctl_index);
		return true;
	};

	// Toggle current shift state
	this.setPage = function(page_id) {
		this.currentPage = page_id;
		LOG("Page - " + this.currentPage);
	};

}

//PageSet.prototype = new iCtl;
PageSet.prototype = (function(parent, child){
	function protoCreator(){
		this.constructor = child.prototype.constructor;
	};
	protoCreator.prototype = parent.prototype;
	return new protoCreator();
})(iCtl, PageSet);
PageSet.prototype.constructor = PageSet;
PageSet.prototype.parent = PageSet.prototype;


LOG("pageset.ctl.js loaded");

