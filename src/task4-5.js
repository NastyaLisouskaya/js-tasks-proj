//Task4 demonstrate switch
//Task5 demonstrate try..catch..finally

// simple calculator with 4 operations: sum, sub, mul, div
function calculate(operand1, operand2, operation) {
    console.log(`Operand1: ${operand1} Operand2: ${operand2} Operation: ${operation}`);
    switch (operation) {
        case "sum":
            return operand1 + operand2;
        case "sub":
            return operand1 - operand2;
        case "mul":
            return operand1 * operand2;
        case "div":
            return operand1 / operand2;
        default:
            throw new Error('Unsupported operation');
    }
}

module.exports = {
    calculate
}

const application = function() {
    try{
        console.log(calculate(3, 5, "sum"));
        console.log(calculate(11, 2, "sub"));
        console.log(calculate(3, 5, "mul"));
        console.log(calculate(3, 5, "div"));
        console.log(calculate(3, 5, "mod"));
    }
    catch(err){
        console.error(err);
    }
    finally{
        console.log('Simple calculator finished.');
    }

}

application();