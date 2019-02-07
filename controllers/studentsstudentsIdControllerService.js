'use strict';
let students = require('./students');
module.exports.funcstudentsstudentIDPARAMETERS = function funcstudentsstudentIDPARAMETERS(req, res, next) {
  res.send({
      message: 'This is the mockup controller for funcstudentsstudentIDPARAMETERS'
  });
};

module.exports.getStudents = function getStudents(req, res, next) {
   const id = req.studentId.value;
   console.log("get student id", id);
    const student = students.getStudent(id);
    if (student) {
      res.status(200).json(student);
  } else {
      res.status(404).send('STUDENT NOT FOUND');
  }
};
  //  message: 'This is the mockup controller for getStudents'
 // });
//};

module.exports.updateStudents = function updateStudents(req, res, next) {
 console.log("put students req",req);
 let student = req.undefined.value;
 console.log("put students", student);
 if(students.putStudent(student)) {
   res.status(200).send("UPDATED");
  }else{
   res.status(400).send("NOT UPDATED");
       }
 };
module.exports.deleteStudents = function deleteStudents(req, res, next) {
  //res.send({
    //message: 'This is the mockup controller for deleteStudents'
  const deleteId = req.studentId.value;
  if (students.deleteStudent(deleteId)){
    res.status(200).send("Student Delete OK");
  } else{
  res.status(404).send('NOT FOUND');
        }
  };


