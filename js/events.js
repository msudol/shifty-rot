$(function() {

    $("#cipherForm").submit(function( event ) {

        event.preventDefault();
        
        var key1 = $("#key1").val();
        var key2 = $("#key2").val();
        var alpha = $("#alpha").val();
        var cipher = $("#cipherText").val();
        var encodeOptions = $("input[name='encodeOptions']:checked").val();
        var caseOptions = $("input[name='caseOptions']:checked").val();
        var ioMethod = $("input[name='ioMethod']:checked").val();
        
        // check fields for validity before submitting.
        // especially the alphabet - no duplicate chars for example would be a good one.

        var res = coder(key1, key2, alpha, cipher, encodeOptions, caseOptions, ioMethod);
        $("#resultText").val(res[0]);
        $("#resultShifts").val(res[1]);
        
    });
    
    
    $("#presetsForm").submit(function( event ) {

        event.preventDefault();

        var selectedPreset = $("input[name='presets']:checked").val();
        var value, caseSens, ignoreCase;
        
        switch (selectedPreset) {
            case "fullAlpha": 
                value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                caseSens = true;
                ignoreCase = false;
                break;
            case "fullAlphaNum": 
                value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                caseSens = true;
                ignoreCase = false;
                break;
            case "printableASCII":
                value = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
                caseSens = true;
                ignoreCase = false;
                break;
            default:
                value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                caseSens = false;
                ignoreCase = true;
                break;
        }
          
        $("#alpha").val(value);
        $("#radioCase").prop("checked", caseSens);
        $("#radioIgnore").prop("checked", ignoreCase);
        $("#string").prop("checked", caseSens);
        $("#base64").prop("checked", ignoreCase);        
    });
       
    
});