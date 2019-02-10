'use strict';


var grades = require('./grades');
module.exports.findGrades = function findGrades(req, res, next) {
  res.status(200).json(grades.getGrades());
   
};

module.exports.createGrades = function createGrades(req, res, next) {
  const grade = req.undefined.value;
  if (grades.addGrade(grade)) {
      res.status(200).send("OK");
  } else {
      res.status(404).send("ERROR")
   }
  };
//};
//'use strict'

//module.exports.findGrades = function findGrades(req, res, next) {
    //res.json(students);
   
//};

//module.exports.createGrades = function createGrades(req, res, next) {
//  res.send({
  //  message: 'This is the mockup controller for createGrades'
 // });
//};