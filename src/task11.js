//Task11: replase all space characters by underscore character in the string
function changeSpacesToUnderscore(str) {
    return str.replace(/ /g, "_");
}

const application = function () {
    let str = "I love JS";
    console.log('Initial: ' + str);
    console.log('Result: ' + changeSpacesToUnderscore(str));
}

application();