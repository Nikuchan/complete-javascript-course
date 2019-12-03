// var yearOfBirth;
// console.log(this);
// function calculateAge(year) {
    // console.log(2016 - year);
    // console.log(this);
// }

// calculateAge(1995);


// var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     calculateAge: function() {
//         console.log(this)
//         console.log(this.yearOfBirth);
//     }
// }

// john.calculateAge()

var calculateAge = function() {
    console.log(this);
}
calculateAge()