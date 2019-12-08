// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// var john = new Person('john', 1990, 'teacher');
// // john.calculateAge()
// var jane = new Person('jane', 1969 , 'designer');
// var mark = new Person('mark', 1948, 'retired');

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth);
// }
// Person.prototype.lastName = this.yearOfBirth;
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
// // console.log(john)

// Object.create

// var personProto = {
//     calculateAge: function() {
//         console.warn(2019 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';

// var jane = Object.create(personProto,
//     {
//         name: { value: 'jane' }
//     });

// Passing Functions as Arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCal(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i< arr.length; i++) {
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >=18;
// }

// // Using a callback functon is without '()', so that it won't get called instantly
// var ages = arrayCal(years, calculateAge);
// var fullAges = arrayCal(ages, isFullAge);
// console.log('Ages', ages);
// console.log('Full Ages', fullAges);

// Fuction Returning Functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ' can you plaese expalin what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What Subjects do you teach ' + name + '?');
//         }
//     }
// }

// var teacherquestion = interviewQuestion('teacher');
// console.log(teacherquestion);
// var designerQuestion = interviewQuestion('designer');
// teacherquestion('john');
// designerQuestion('john');

// interviewQuestion('teacher')('Abhijeet');

// Immediately Invoked Function Expressions (IIFE)

// function game() {
//     var score = Math.floor(Math.random() * 10) + 1;
//     console.log(score);
//     console.log(score >=5)
// }

// game();

// (function () {
//     var score = Math.floor(Math.random() * 10) + 1;
//     console.log(score);
//     console.log(score >=5)
// })(5);

// Closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990); // retirement(66)(1990)
// var retirementGermany = retirement(65);
// retirementGermany(1990);

// function interviewQuestion(job) {
//     designerQuestion = ' can you plaese expalin what UX design is?';
//     teacherQuestion = 'What Subjects do you teach ';
//     return function(name) {
//     if (job === 'designer') {
//         console.log(name + designerQuestion);
//     } else if (job === 'teacher') {
//         console.log(teacherQuestion + name + '?');
//     } else {
//         console.log('what do you do');
//     }
// }
// }

// interviewQuestion('teacher')('noah');

/////////////////////////////
// Lecture: Bind, call and apply
// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation.call(emily, 'formal', 'morning');

// john.presentation.apply(emily, ['friendly','afternoon'])

// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');