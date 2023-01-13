//import Human from '/bin/Human.js';
const { Human } = require('./Human.js');

class Man extends Human {
    constructor(name, job) {
        super("Man", name);
        this.job = job;
    }

    sayJob() {
        console.log("I'm working as " + this.job);
    }
}

module.exports = {
    Man
  };