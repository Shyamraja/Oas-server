'use strict';
let grades = require('./grades');
module.exports.funcgradesgradesIdPARAMETERS = function funcgradesgradesIdPARAMETERS(req, res, next) {
 res.send({
   message: 'This is the mockup controller for funcgradesgradesIdPARAMETERS'
  });
};

module.exports.getGrades = function getGrades(req, res, next) {
  const id = req.gradeId.value;
  console.log("get grade id", id);
  const grade = grades.getGrade(id);
  if (grade) {
    res.status(200).json(grade);
  } else {
    res.status(404).send("GRADE NOT FOUND");
  }
}; 
  

module.exports.updateGrades = function updateGrades(req, res, next) {
  console.log("get grade id", id);
  //module.exports.updateGrades = function updateGrades(req, res, next) {
    let grade = req.undefined.value;
    console.log("put grades", grades);
    if (grades.putGrade(grade)) {
      res.status(200).send(" OK");
    } else {
      res.status(404).send("SERVER ERROR")
    }
  };
  

module.exports.deleteGrades = function deleteGrades(req, res, next) {
  //res.send({
    const deleteID = req.gradesId.value;
  if (grades.removeGrade(deleteID)) {
    res.status(200).send('GRADES DELETE OK');
  } else {
    res.status(404).send('NOT FOUND');
  }
};

module.exports.funcgradesgradesIdPARAMETERS = function funcgradesgradesIdPARAMETERS(req, res, next) {
 res.send({
   message: 'This is the mockup controller for funcgradesgradesIdPARAMETERS'
});
 };

//module.exports.getGrades = function getGrades(req, res, next) {
  //const id = req.gradesId.value;
  //const grade = grades.getGrade(id);
  //if (grade) {
   // res.status(200).json(grade);
  //} else {
   // res.status(404).send("GET GRADE NOT FOUND");
 // }
//}; 

//module.exports.updateGrades = function updateGrades(req, res, next) {
 // res.send({
   // message: 'This is the mockup controller for updateGrades'
  //});
//};

//module.exports.deleteGrades = function deleteGrades(req, res, next) {
 // res.send({
  //  message: 'This is the mockup controller for deleteGrades'
  //});
//};