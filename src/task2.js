//Task2 demonstrate if..else statement
//function determines is number even or not
function isEvenNumber(num) {
    if (num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

const application = function() {
    let array = [1, 4, 3, 6, 8];
    for (i of array){
        console.log(`Is ${i} even? ${isEvenNumber(i)}`);
    }
}

application();