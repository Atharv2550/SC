// String
var name = "Atharv";
//  Number
var age = 21;
// Boolean
var isStudent = true;
//  Array
var marks = [85, 90, 78];
//  Tuple
var studentInfo = ["Atharv", 21];
//  Any
var randomValue = "Hello";
randomValue = 100;
// Unknown
var data = "TypeScript";
// Null
var x = null;
//  Undefined
var y = undefined;
// Object
var person = {
    name: "Atharv",
    age: 21
};
//  Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var selectedColor = Color.Green;
console.log("String:", name);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log("Array:", marks);
console.log("Tuple:", studentInfo);
console.log("Any:", randomValue);
console.log("Unknown:", data);
console.log("Null:", x);
console.log("Undefined:", y);
console.log("Object:", person);
console.log("Enum:", selectedColor);
