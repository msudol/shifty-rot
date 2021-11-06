$(function() {
    $("#cipherForm").submit(function( event ) {
        event.preventDefault();
        var key1 = "Python";     
        var key2 = "JavaScript";
        var alpha = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
        var cipher = $("#cipherText").val();
        var encodeOptions = "true";
        var caseOptions = "true"
        var ioMethod = "false";
        var res = coder(key1, key2, alpha, cipher, encodeOptions, caseOptions, ioMethod);
        $("#resultText").val(res[0]);  
    });
});

const mod = (x, n) => (x % n + n) % n

var coder = function(key1, key2, alpha, cipher, encodeOpts, caseOpts, ioMethod) {

    var doenc = (encodeOpts === 'true');
    var docase = (caseOpts === 'true');
    var iomethod = (ioMethod === 'true');

    if (!iomethod) {
        if (!doenc) {
            cipher = atob(cipher);
        }
    }

    if (!docase) {
        alpha = alpha.toUpperCase();
        key1 = key1.toUpperCase();
        key2 = key2.toUpperCase();
    }    
   
    var alphabet = Array.from(alpha);
    var aKey = Array.from(key1);
    var bKey = Array.from(key2);
    var cText = Array.from(cipher);
   
    aKey = keyCleaner(aKey, alphabet);
    bKey = keyCleaner(bKey, alphabet);
    
    var buildCipher = [];
    var shifts = [];
    var mod1 = aKey.length;
    var mod2 = bKey.length;
    
    for (var i = 0; i < cText.length; i++) {
        
        var n = i % mod1; 
        var o = i % mod2;
        var res;
        
        if (docase) {
            var check = cText[i];
        }
        else {
            var check = cText[i].toUpperCase();
        }
        
        if (alphabet.indexOf(check) > -1) {
            res = getRot(aKey[n], bKey[o], alphabet, cText[i], doenc, docase, iomethod);
        }
        else {
            res = [cText[i], "-"];
        }
        
        buildCipher.push(res[0]);
        shifts.push(res[1]);

    }
    
    var complete = buildCipher.join('');
    
    if (!iomethod) {
        if (doenc) {
            complete = btoa(complete);
        }
    }
    
    return [complete, shifts];
};

function keyCleaner(k, a) {
    // cleanup key 
    for (var i=k.length; i > -1; i--) {
        if (!a.includes(k[i])) {
            k.splice(i,1);
        }
    } 
    return k;
}

function getRot(k1, k2, a, c, doenc, docase, iomethod) {
    var ka = a.indexOf(k1); 
    var kb = a.indexOf(k2); 
    
    if (docase) {
        var cx = a.indexOf(c);
    }
    else {
       var cx = a.indexOf(c.toUpperCase()); 
    }
    var rot, res, index;
    
    if (ka > kb) {
        // cycle around the horn
        rot = (a.length - ka) + kb; 
    }
    else if (ka < kb) {
        // key 2 is higher than key 1 in the alphabet
        rot = kb - ka;
    }
    else {
        // they are equal so rot0
        rot = 0;
    }
    
    if (doenc) {
        index = mod(cx + rot, a.length);
    }
    else {        
        index = mod(cx - rot, a.length);
    }
    
    res = [a[index], rot];
    
    return res;
    
}