function validateCurrency(inp) {
    if (parseInt(inp.value) < 1000) inp.value = "1 000";
    if (parseInt(inp.value) > 75000) inp.value = "75 000";
}

function checkIsDigit(event) {
    var code = (event.which) ? event.which : event.keyCode;

    if((code < 48 || code > 57) && code > 31) {
        return false;
    }
    return true;
}

function cardNumberFormat(inp) {
    var v = inp.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || '';
    var parts = [];

    for (i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        inp.value = parts.join(' ')
    }
}

function cardDateFormat(inp) {
    var v = inp.value.replace(/\D/g, "");
    var result = "";
    if (v != "")
    {
        if(v. length > 0)
        {
            for(var i = 0; i < v.length; i++)
            {
                result += v.charAt(i);
                if(i == 1 && v.length >= 3) result += "/";                
            }
        }
    }
    inp.value = result;
}