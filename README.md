shermap
=======

Bitwig contol script framework for hardware abstraction.

Included are my main shermap.control.js script and initial quneo.ctlmap.js implementation. 

  

### The code defines a couple of new interfaces:
- iCtl 
  - represents a physical set of MIDI controls. i.e. grid of pads, group of faders, etc...
  - see \*.ctl.js implementations
- iCtlMap 
  - represents a virtual midi controller made from a collection of iCtl control sets
  - handles the mapping of incoming MIDI notes / controls, and defines the callbacks
  - see quneo.ctlmap.js implementation

  

### To test with a MIDI controller:
- copy the source to a new BWS control script directory under: sherman/shermap/
- copy quneo.ctlmap.js to your_controller.ctlmap.js
- modify the shermap.control.js file to load your new .ctlmap.js instead of the quneo implementation:
```javascript
//load('quneo.ctlmap.js'); 
//var ctrlmap = new QuneoCtlMap(); 
load('your_controller.ctlmap.js'); 
var ctrlmap = new YourNewCtlMap(); 
```

- modify your_controller.ctlmap.js to use your new class name:
```javascript
//QuneoCtlMap.prototype = new iCtlMap;
//QuneoCtlMap.prototype.constructor = QuneoCtlMap;
//function QuneoCtlMap() {
YourNewCtlMap.prototype = new iCtlMap;
YourNewCtlMap.prototype.constructor = YourNewCtlMap;
function YourNewCtlMap() {
```

- update the PadGrid(16), PageSet(4) and ShiftBtn(1) constructors with the correct control count, and setNoteArray() calls with the expected MIDI notes
- load the script in BWS and assign your controller to the input and output
- open the Script Console window to view the trace and logging output


Let me know if you have any suggestions, or run into any issues.


### My thanks to: (in no particular order)

- dataf1ow
  - Handling the BWS script development for Keith McMillen Instruments, the makers of my Quneo
- TeotiGraphix
  - Helps out with design and testing of my framework, working on a Push implementation (github link coming)
- ultra-
  - Check his ipad / android app for Ableton Live control - http://www.sub-version.net/
- JamieP, phade, and anyone else who hangs out on irc.freenode.net #bitwig-dev and listens to my ramblings

