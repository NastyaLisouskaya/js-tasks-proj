//Task10: filter odd numbers from array.
//Function receive an array of numbers and return an array of even numbers

function filterOddNumbers(numbarray) {
    var resultArray = [];
    for (number of numbarray) {
        if (number % 2 == 0) {
            resultArray.push(number);
        }
    }
    return resultArray;
}

const application = function () {
    let array = [0, 1, 2, 3, 4, 5];
    console.log('Initial array: ' + array);
    console.log(filterOddNumbers(array));
}

application();