"use strict";

function Student(name, gender, age){
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
};

let student = Object.create(Student);
Object.create(Student);
Object.create(Student);

let student1 = new Student("Дмитрий", "мужской", 21),
  student2 = new Student("Мария", "женский", 19),
  student3 = new Student("Лидия", "женский", 19),
  student4 = new Student("Вячеслав", "мужской", 20);

Student.prototype.setSubject = function (subjectName){
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks){
  if ("marks" in this === true){
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function (){
  if ("marks" in this === false || this.marks.length === 0){
    return 0;
  }
  let sum = this.marks.reduce((acc, el) => acc + el);
  let averageValue = sum / this.marks.length;

  return averageValue;
};

Student.prototype.exclude = function (reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
