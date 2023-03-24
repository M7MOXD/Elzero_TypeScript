// Assignment => 01 & 02
function calculate(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

// Assignment => 03
function printInfo(valueOne: string | number, valueTwo: string | number) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// Assignment => 04
let arr: (number | boolean[] | (string | (string | number)[])[])[];
arr = [0, 1, [true, false], ["String", ["String", 0, 1]]];

// Assignment => 05
function reportErrors(username: string, _age?: number) {
  return `Username: ${username}`;
}
console.log(reportErrors("Elzero", 40));

// Assignment => 06
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c: string) {
  return `${a}${b}${c}`;
}
console.log(showMyDetails(nothing, nothing, theName)); // Elzero

// Assignment => 07
function showMsg(user?: string, age?: number | string, country?: string) {
  return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));

// Assignment => 08
function printInConsole(...x: any[]) {
  x.forEach((x) => console.log(`The Value Is ${x} And Type Is ${typeof x}`));
  return "Done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
