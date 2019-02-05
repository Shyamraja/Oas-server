let i=1;
const courses=
    [
        {
            ID: i++,
            Name:"course name",
            Description:" course description"
        },
        {
            ID: i++,
            Name:"course name",
            Description:"course description"
        },
        {
            ID: i++,
            Name:"course name",
            Description:"course description"
        }
    ];
    const findIndex = id => {
        let index = false;
        courses.map((course, idx) => {
            if (course.Id == id) {
                index = idx;
            }
        });
        return index;
    };
    
    module.exports.getAllCourses = () => {
        return courses;
    };
    
    module.exports.getCourse = id => {
      let index = findIndex(+id);
        if (index => 0) {
            return courses[+index];
        } else {
            return false;
        }
    };
    
    module.exports.addCourse = course => {
        if (course) {
            course.Id = i++;
            courses.push(course);
            return true;
        } else {
            return false;
        }
    };
    
    module.exports.putCourse = (course) => {
        let index = findIndex(course.courseID);
        if (index >=0) {
            courses[index].courseName = course.courseName;
            courses[index].description = course.description;
            return true;
        } else {
            return false;
        }
    };
    
    module.exports.removeCourse = id => {
        let index = findIndex(id);
        if (index>=0) {
            courses.splice(index, 1);
            return true;
        } else {
            return false;
        }
    };