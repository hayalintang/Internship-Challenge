class Human {
    static isLivingOnEarth = true;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    introduce() {
        return `Hi, my name is ${this.name}`;
    }
}

 Human.prototype.greet = function (name) {
    return `Hi, ${name}, I'm ${this.name}`;
 }

Human.destroy = function (thing) {
    console.log(`Human is destroying ${thing}`)
 }

 let hy = new Human ("Haya Lintang", "Semarang");
 console.log(hy);
 console.log(hy instanceof Human);
 console.log(hy.introduce());
 console.log(hy.greet ("Park Jisung"));
 console.log(Human.destroy ("Weakness"));
