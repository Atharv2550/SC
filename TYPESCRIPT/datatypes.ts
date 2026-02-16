// String
let StudentName: string = "Atharv";


//  Number
let Age: number = 21;

// Boolean
let isstudent: boolean = true;

//  Array
let Marks: number[] = [85, 90, 78];

//  Tuple
let StudentInfo: [string, number] = ["Atharv", 21];

//  Any
let RandomValue: any = "Hello";
RandomValue = 100;

// Unknown
let Data: unknown = "TypeScript";

// Null
let X: null = null;

//  Undefined
let Y: undefined = undefined;

// Object
let Person: { name: string; age: number } = {
    name: "Atharv",
    age: 21
};

//  Enum
enum color {
    Red,
    Green,
    Blue
}
let SelectedColor: color = color.Green;



console.log("String:", name);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log("Array:", marks);
console.log("Tuple:", studentInfo);
console.log("Any:", randomValue);
console.log("Unknown:", data);
console.log("Null:", X);
console.log("Undefined:", Y);
console.log("Object:", person);
console.log("Enum:", selectedColor);
