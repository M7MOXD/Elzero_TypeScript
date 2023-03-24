// Assignment => 01
type numandstring = number | string;
abstract class Game {
  constructor(public title: string, public price: numandstring) {}
  abstract getLocation(): string;
  abstract getDiscount(): string;
}
class RPG extends Game {
  constructor(title: string, price: numandstring, public rate: number) {
    super(title, price);
  }
  override getLocation(): string {
    return "Location";
  }
  override getDiscount(): string {
    return "Discount";
  }
}
class Action extends Game {
  constructor(
    title: string,
    price: numandstring,
    public rate: number,
    public company: string
  ) {
    super(title, price);
  }
  override getLocation(): string {
    return "Location";
  }
  override getDiscount(): string {
    return "Discount";
  }
}
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"
console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"

// Assignment => 02
function showTypes<X = string, Y = void, Z = void>(
  x?: X,
  y?: Y,
  z?: Z
): string {
  return `${x ? x : "Nothing"} - ${y ? y : "Nothing"} - ${z ? z : "Nothing"}`;
}
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// Assignment => 03
class XGame<T> {
  constructor(public title: T, public price: number) {}
  getDiscount(x: T) {
    console.log(`The Discount Is ${x}`);
  }
}
let xGameOne = new XGame<string>("Ys", 100);
let xGameTwo = new XGame<number>(2064, 100); // There's A Game Called "2064"
console.log(xGameOne.title); // "Ys"
console.log(xGameOne.price); // 100
xGameOne.getDiscount("50"); // "The Discount Is 50"
console.log(xGameTwo.title); // 2064
console.log(xGameTwo.price); // 100
xGameTwo.getDiscount(80); // "The Discount Is 80"
