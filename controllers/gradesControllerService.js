'use strict'

let students = 
    [
        {
            Id: 1,
            name:"Shyam Vetwal",
            Address:"Kajannintie 30 90120 Oulu",
            Courses:[
                {   
                    id: 1,
                    grade: 3,
                    name: "Java",
                },
                {
                    id: 2,
                    grade:1,
                    name: "Android Application",
                },
                {
                    id: 3,
                    grade:4,
                    name:"AngularJS",
                }
            ],
        },
        {
            Id: 2,
            name:"Suman Pandey",
            Address:"Hanhitie 17 90150 Oulu",
            Courses:[
                {
                    id: 1,
                    grade: 4,
                    name: "Php",
                },
                {
                    id:3,
                    grade:2,
                    name:"AngularJS",
                }
            ],
        }
       
    ];


module.exports.findGrades = function findGrades(req, res, next) {
  res.json(students);
   
};

module.exports.createGrades = function createGrades(req, res, next) {
  res.send({
    message: 'This is the mockup controller for createGrades'
  });
};
'use strict'

module.exports.findGrades = function findGrades(req, res, next) {
    res.json(students);
   
};

module.exports.createGrades = function createGrades(req, res, next) {
  res.send({
    message: 'This is the mockup controller for createGrades'
  });
};