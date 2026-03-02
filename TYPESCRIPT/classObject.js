// Class Definition
var Student = /** @class */ (function () {
    function Student(studentName, age, course) {
        this.studentName = studentName;
        this.age = age;
        this.course = course;
    }
    Student.prototype.display = function () {
        console.log("Name:", this.studentName);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    };
    return Student;
}());
// Creating Object
var student1 = new Student("Atharv", 21, "Computer Science");
// Calling Method
student1.display();
