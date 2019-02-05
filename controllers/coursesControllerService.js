'use strict';
const courses = require('./courses');
module.exports.findCourses = function findCourses(req, res, next) {
  res.status(200).json(courses.getAllCourses ());
};
module.exports.createCourses = function createCourses(req, res, next) {
  const course = req.undefined.value;
  if (courses.addCourse(course))   {
    res.status(200).send("POST OK");
  } else {
    res.status(404).send("POST ERROR OF SERVER");
  }
};
  
//};



//module.exports.findCourses = function findCourses(req, res, next) {
  //res.json(courses);
//};


//module.exports.createCourses = function createCourses(req, res, next) {
 // console.log("req",req.undefined.value);
  //courses.push(req.undefined.value);
  //res.send("OK");
  

//};