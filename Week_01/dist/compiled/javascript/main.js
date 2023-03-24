"use strict";
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20));
console.log(calculate(+true, +true));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
let arr;
arr = [0, 1, [true, false], ["String", ["String", 0, 1]]];
function reportErrors(username, _age) {
    return `Username: ${username}`;
}
console.log(reportErrors("Elzero", 40));
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
console.log(showMyDetails(nothing, nothing, theName));
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
function printInConsole(...x) {
    x.forEach((x) => console.log(`The Value Is ${x} And Type Is ${typeof x}`));
    return "Done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map