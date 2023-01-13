class Human {
    constructor(sex, name){
        this.sex = sex;
        this.name = name;
    }

    sayHello() {
        console.log("Hello! My name is " + this.name);
    }
}

module.exports = {
    Human
  };