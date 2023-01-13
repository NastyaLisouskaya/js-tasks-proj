//Task3 demonstrate for loop: bouble sort of array
function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var buf = array[i];
                array[i] = array[j];
                array[j] = buf;
            }
        }
    }
}

function printArray(array) {
    for (i of array) {
        console.log(i);
    }
}

function printArrayWithIndexes(array) {
    for (i in array) {
        console.log(`Index: ${i} Value: ${array[i]}`)
    }
}

function whileArray(array) {
    var i = 0;
    while (i<array.length) {
        console.log(i);
        i++;
    }
}

const application = function() {
    let array = [1, 4, 3, 9, 6, 2, 8];
    console.log(`Non sorted array: ${array}`)
    bubbleSort(array);
    console.log(`Sorted array: ${array}`)

    console.log('Print each array element on the new line');
    printArray(array);
    console.log('Print array element and it\'s index');
    printArrayWithIndexes(array);
    console.log('Print array indexes');
    whileArray(array);
}

application();

