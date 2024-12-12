const search = document.getElementById("search");
var speech = true; 
window.SpeechRecognition = window.SpeechRecognition 
    || window.webkitSpeechRecognition; 

const recognition = new SpeechRecognition(); 
recognition.interimResults = true; 
recognition.addEventListener('result', e => { 
    const transcript = Array.from(e.results) 
	  .map(result => result[0]) 
	  .map(result => result.transcript) 
	  .join('') 

    search.value = transcript; 
    console.log(transcript); 
}); 

function clickPress(event) {
    console.log("in clickpress");
}

function mouseenter(thing) {
    console.log("mouse enter");
    recognition.start(); 
    recognition.addEventListener('end', recognition.start);
}

function mouseleave(thing) {
    console.log("mouse leave");
    recognition.removeEventListener('end', recognition.start);
    recognition.stop();
}

// do start and stop to force browser to request permission
recognition.start(); 
recognition.stop();

		

