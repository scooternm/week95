//school has: students, teachers. does: teach, motivate
//students have: knowledge, skills, creativity
//teachers have: experience, knowledge, maturity

//BASE CLASS aka PARENT CLASS, we inherit from Person
class Person{
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
    }
}
class Student extends Person { //Student is_a Person, and inherits constructor, name, skills
    learn(skill) {
        this.skills.push(skill);
    }
}
class Teacher extends Person{ //Teach is_a Person, and inherits constructor, name, skills
    teach(student, skill_index) {
        student.learn(this.skills[skill_index]);
    }
}
class School {
    // COMPOSITION - has_a relationship between Objects.
    // a school is COMPOSED of students and teachers
    constructor(teachers, students) {
        this.teachers = teachers; //school has teachers
        this.students = students; // school has students
    }
}
//TESTS
let s = new School(
    [
        new Teacher("Bob", ["code", "draw"]),
        new Teacher("Carol", ["accounting", "statistics"]),
    ],
    [
        new Student("Ted", ["cooking"]),
        new Student("Alice", ["draw"]),
    ]
);
let alice = s.students[1];
let bob = s.teachers[0];
bob.teach(alice, 0);
console.log(alice.skills[1] === "code");


