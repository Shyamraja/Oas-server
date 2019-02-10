let i=1;
let grades=
    [
        {
            gradeID: i++,
            StudentName:"student name",
            courseName:"course name",
            grade : 3
        },
        {
            gradeID: i++,
            studentName:"student name",
            courseName:"course name",
            grade : 2
        },
        {
            gradeID: i++,
            StudentName:"student name",
            courseName:"course name",
            grade : 5
        }
    ];
    const findIndex = id => {
        let index = false;
        grades.map((grade, idx) => {
            if (grade.gradeId == id) {
                index = idx;
            }
        });
        return index;
    };
    
    module.exports.getGrades = () => {
        return grades;
    };
    
    module.exports.getGrade = id => {
      let index = findIndex(+id);
        if (index >= 0) {
            return grades[+index];
        } else {
            return false;
        }
    };
    
    module.exports.addGrade = grade => {
        if (grade) {
            grade.gradeId = i++;
            grades.push(grade);
            return true;
        } else {
            return false;
        }
    };
    
    module.exports.putGrade = (grade) => {
        let index = findIndex(grade.gradeID);
        if (index) {
            grades[index].studentName = grade.studentName;
            grades[index].courseName = grade.courseName;
            grades[index].grade = grade.grade;
            return true;
        } else {
            return false;
        }
    };
    
    module.exports.deleteGrade = id => {
        let index = findIndex(id);
        if (index) {
            grades.splice(index, 1);
            return true;
        } else {
            return false;
        }
    };