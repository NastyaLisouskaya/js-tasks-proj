//Task9 To filter an array: substract one set from another
//Initial array may contains strings that consist of several words splitted by space character
function filterArray1(strArray, gusi) {
    var resultArray = [];

    for (str of strArray) {
        for (word of str.split(" ")) {
            if (!gusi.includes(word)) {
                resultArray.push(word);
            }
        }
    }
    return resultArray
}

//Initial array may just consist of words
function filterArray2(array, gusi) {
    var resultArray = [];

    for (word of array) {
        if (!gusi.includes(word)) {
            resultArray.push(word);
        }
    }
    return resultArray;
}

const application = function () {
    let testArray1 = ["Minsk Paris", "Paris", "London", "Berlin London"];
    let testArray2 = ["Minsk", "Paris", "London", "Berlin"];
    let gusiArray = ["Paris", "London"];

    console.log('Gusi: ' + gusiArray);

    console.log('Initial array: ' + testArray1);
    console.log("Result: " + filterArray1(testArray1, gusiArray));
    console.log('Initial array: ' + testArray2);
    console.log("Result: " + filterArray2(testArray2, gusiArray));
}

application();