//Task8: return the longest words from array of strings
function findLongestWords(strArray) {
    var maxLength = 0;
    var resultArray = [];

    for (str of strArray) { //For loop over array of strings
        for (word of str.split(" ")) { //Split string to words using space character and go through all words
            if (word.length > maxLength) {
                maxLength = word.length;
                resultArray = [];
                resultArray.push(word);
            }
            else if (word.length == maxLength) {
                resultArray.push(word);
            }
        }
    }

    return resultArray;
}

const application = function () {
    let testArr = ["Minsk Paris", "Paris", "London", "Berlin London"]
    console.log(findLongestWords(testArr))
}

application();