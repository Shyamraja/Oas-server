'use strict';
const courses = require('./courses');
//module.exports.funccoursescoursesIdPARAMETERS = function funccoursescoursesIdPARAMETERS(req, res, next) {
  //res.send({
   // message: 'This is the mockup controller for funccoursescoursesIdPARAMETERS'
  //});
module.exports.getCourses = function getCourses(req, res, next) {
  const id = req.coursesId.value;
  const course = courses.getCourse(id);
  if (course) {
    res.status(200).json(course);
  } else {
    res.status(404).send("GET COURSE SERVER ERROR");
  }
};
   // message: 'This is the mockup controller for getCourses'
  //});


module.exports.updateCourses = function updateCourses(req, res, next) {
    const course = req.undefined.value;
    if (courses.putCourse(course)) {
      res.status(200).send("UPDATE COURSES OK");
    } else {
      res.status(404).send("UPDATE COURSES SERVER ERROR");
    }
  };
  //});
//};

module.exports.deleteCourses = function deleteCourses(req, res, next) {
  
   // message: 'This is the mockup controller for deleteCourses'
  //});
  const deleteID = req.coursesId.value;

  if (courses.removeCourse(deleteID)) {
    res.status(200).send(' DELETE OK');
  } else {
    res.status(404).send('COURSE DELETE NOT FOUND');
  }
};



