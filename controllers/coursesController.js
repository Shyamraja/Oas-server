'use strict';

var ourcoursesController = require('./coursesControllerService');

module.exports.findCourses = function findCourses(req, res, next) {
  ourcoursesController.findCourses(req.swagger.params, res, next);
};

module.exports.createCourses = function createCourses(req, res, next) {
  ourcoursesController.createCourses(req.swagger.params, res, next);
};
