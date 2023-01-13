const { Man } = require('./task6/Man.js');


const application = function() {
    let man = new Man("Ivan", "Engenier");
    man.sayHello();
    man.sayJob();
}

application();