'use strict';
var students = require('./students');

module.exports.findStudents = function findStudents(req, res, next) {
  res.status(200).json(students.getStudents());
};

module.exports.createStudents = function createStudents(req, res, next) {
  const student = req.undefined.value;
  if (students.addStudent(student)) {
  res.status(200).send("OK");
  }else {
    res.status(400).send("server error");
    }
  };

