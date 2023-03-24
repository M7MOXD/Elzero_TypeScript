// Assignment => 01
type n = number;
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here

// Assignment => 02
type mix = number | boolean;
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

// Assignment => 03
type Info = {
  theName: string;
  theAge: number;
};
type Full = Info & {
  country: string;
};
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

// Assignment => 04
function yesOrNo(val: number): boolean {
  if (val > 10) {
    return true;
  } else {
    return false;
  }
}
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False

// Assignment => 05
type custom = "Yes" | "No";
function isHeOld(age: number): custom {
  if (age > 40) {
    return "Yes";
  } else {
    return "No";
  }
}
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"

// Assignment => 06
let post: readonly [number, string, boolean];
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
let [id, title, state] = post;
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true

// Assignment => 07
function insaneFun(x: number): number {
  return Game.Hard - x;
}
enum Game {
  Easy = 100,
  Medium = Easy - 20,
  Hard = Medium - Easy / 2,
  Insane = insaneFun(10),
}
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20

// Assignment => 08
const user: {
  username: string;
  age: number | string;
  website?: string;
  skills: {
    frontEnd: string[];
    backEnd: (string | number)[];
  };
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"],
  },
};
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
