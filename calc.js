'use strict';

{
    const result = document.getElementById('result')

    var myValue = function(button) {
        result.value += button.value;
    }
    
    var myCalc = function() {
        result.value = eval(result.value);
    }

    var myClear = function() {
        result.value = "";
    }

}