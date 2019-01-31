'use strict';
let s=1;
let students= 
[
  {
      name:"Shyam Vetwal",
      Address:"Kajannintie 30 90120 Oulu",
      Class:"Java",
      Id: 1
  },
  {
      name:"Suman Pandey",
      Address:"Hanhitie 17 90150 Oulu",
      Class:"Android Application",
      Id: 2
  },
  {
      name:"Veikko Lahm",
      Address:"Kasarmitie 10 90140 Oulu",
      Class:"AngularJS",
      Id: 3
  },
  {
      Name:"Samila karjalaininn",
      Address:"Jasmintie 18 10350 Oulu",
      Class:"Frontend Application",
      Id: 4
  }
]
module.exports.findStudents = function findStudents(req, res, next) {
  res.json(students);
};

module.exports.createStudents = function createStudents(req, res, next) {
  console.log("req",req.undefined.value);
  students.push(req.undefined.value);
  res.send("OK");
  
};

module.exports.funcstudentsPUT = function funcstudentsPUT(req, res, next) {
  res.json(students);
};


module.exports.findStudents = function findStudents(req, res, next) {
  res.json(students);
};

module.exports.createStudents = function createStudents(req, res, next) {
  console.log("req", req.undefined.value);
  students.push(req.undefined.value);
res.send("OK");

};



module.exports.funcstudentsPUT = function funcstudentsPUT(req, res, next) {
  res.json(students);
};

