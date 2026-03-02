class Student {
    studentName: string;
    age: number;
    course: string;

    constructor(studentName: string, age: number, course: string) {
        this.studentName = studentName;
        this.age = age;
        this.course = course;
    }

    display(): void {
        console.log("Name:", this.studentName);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}


let student1 = new Student("Atharv", 21, "Computer Science");

student1.display();