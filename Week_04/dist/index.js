"use strict";
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class RPG extends Game {
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
class Action extends Game {
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title);
console.log(gameOne.price);
console.log(gameOne.rate);
console.log(gameOne.getDiscount());
console.log(gameOne.getLocation());
console.log(gameTwo.title);
console.log(gameTwo.price);
console.log(gameTwo.rate);
console.log(gameTwo.company);
console.log(gameTwo.getDiscount());
console.log(gameTwo.getLocation());
function showTypes(x, y, z) {
    return `${x ? x : "Nothing"} - ${y ? y : "Nothing"} - ${z ? z : "Nothing"}`;
}
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
class XGame {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(x) {
        console.log(`The Discount Is ${x}`);
    }
}
let xGameOne = new XGame("Ys", 100);
let xGameTwo = new XGame(2064, 100);
console.log(xGameOne.title);
console.log(xGameOne.price);
xGameOne.getDiscount("50");
console.log(xGameTwo.title);
console.log(xGameTwo.price);
xGameTwo.getDiscount(80);
//# sourceMappingURL=index.js.map