// Variables
let num: number = 5;
let day: number = 2;


if (num > 0) {
    console.log("Number is Positive");
} else if (num < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}


switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}


console.log("\nFor Loop:");
for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}


console.log("\nWhile Loop:");
let j: number = 1;
while (j <= 5) {
    console.log(j);
    j++;
}


console.log("\nDo While Loop:");
let k: number = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);