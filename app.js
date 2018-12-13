
function keycode() {
    var key = event.keyCode;
    var keyEvent = event.key;
    var codeEvent = event.code;
    var whichEvent = event.which;
    console.log(key);
    console.log(keyEvent);
    console.log(codeEvent);
    console.log(whichEvent);
    document.getElementById("eventKeyCode").innerHTML = key;
    document.getElementById("eventKey").innerHTML = keyEvent;
    document.getElementById("eventCode").innerHTML = codeEvent;
    document.getElementById("eventWhich").innerHTML = whichEvent;
} 

