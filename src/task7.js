const { calculate } = require('./task4-5.js');

//Task 7: callback
function displayResult(result) {
    console.log('Operation result: ' + result);
}

function calculateWithCallback(operand1, operand2, operation, callback) {
    var result = calculate(operand1, operand2, operation);
    callback(result);
}

const application = function() {
    try{
        //Callback demo: send displayResult() to calculateWithCallback() as a callback
        calculateWithCallback(24, 13, 'sum', displayResult);



    }
    catch(err) {
        console.log(err);
    }
}

application();