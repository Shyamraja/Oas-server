'use strict'
let c=1;
let courses=
    [
        {
            Id: 1,
            Name:"Java",
            Description:"Learning To Code Begineer"
        },
        {
            Id: 2,
            Name:"Android Application",
            Description:"Learn to Code Android App"
        },
        {
            Id: 3,
            Name:"AngularJS",
            Description:"Learning to Code Angular Javascript"
        }
    ]

module.exports.findCourses = function findCourses(req, res, next) {
  res.json(courses);
};

module.exports.createCourses = function createCourses(req, res, next) {
  console.log("req",req.undefined.value);
  courses.push(req.undefined.value);
  res.send("OK");
  
};



module.exports.findCourses = function findCourses(req, res, next) {
  res.json(courses);
};


module.exports.createCourses = function createCourses(req, res, next) {
  console.log("req",req.undefined.value);
  courses.push(req.undefined.value);
  res.send("OK");
  

};