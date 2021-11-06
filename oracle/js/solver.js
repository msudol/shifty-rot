// assume we know this
var alpha = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
// track the currently alpha placement
var curAlpha = 0;
// get the encoded secret message
var secret = $("#message").val();
var asecret = atob(secret);
console.log("Solving message: " + secret);
var message = "";

function check() { 
    var result = $("#resultText").val();
    var aresult = atob(result);
    
    console.log("result: " + aresult + " || current: " + message);
    
    if ((aresult.length == asecret.length) && (aresult[message.length - 1] == asecret[message.length - 1])) {
        alert("Complete");
    }
    else if (curAlpha > alpha.length) {
        alert("Something failed");
    }    
    else if (aresult[message.length - 1] == asecret[message.length - 1]) {
       // add a character and start from alpha[0]
       console.log("Matching: " + message);
       curAlpha = 0;
       message = message + alpha[curAlpha];
       $('#cipherText').text(message);
       setTimeout(() => {runEncoder()}, 1);
    }
    else {
       // increment alpha and try again
       curAlpha = curAlpha + 1;
       message = message.slice(0,-1) + alpha[curAlpha]
       $('#cipherText').text(message);  
       setTimeout(() => {runEncoder()}, 1);
    } 
}

function runEncoder() {
    $( "#cipherForm" ).trigger( "submit" );
	check();
}

// set the first value of the text box to the first letter / char in alpha
message = alpha[curAlpha]
$('#cipherText').text(message);

// run the encoder
runEncoder();