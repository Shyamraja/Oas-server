let i=1;
const courses=
    [
        {
            ID: i++,
            Name:"Javascript",
            Description:"Use of Javascript in frontend"
        },
        {
            ID: i++,
            Name:"Php",
            Description:"Php framework Symfony"
        },
        {
            ID: i++,
            Name:"React",
            Description:"using React in Frontend"
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
        console.log("put courses before", courses);
     let index = findIndex(course.ID);
        //let index = findIndex(course.ID);
        if (index >=0) {
            courses[index].courseName = course.courseName;
            courses[index].description = course.description;
            console.log("put courses after", courses);
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