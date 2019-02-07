let i=1;
const students= [
        {
            StudentId: i++,
            Studentname: "Shyam Vetwal",
            StudentAddress: "Kajannintie 30 90120 Oulu",
            Class: "Java"
           
        },
        {
            StudentId: i++,
            Studentname: "Soanm Pandey",
            StudentAddress: "Kajannintie 50 90120 Oulu",
            Class: "JavaScript"
            },
        {
            StudentId: i++,
            Studentname: "Harry KArjalainen",
            StudentAddress: "hanhitie 40 90120 Helsinki",
            Class: "Hybrid app"
        
        }
    ];
    const findIndex = id => {
        let index = false;
        students.map((student, idx) => {
            if (student.studentId == id) {
                index = idx;
            }
        });
        return index;
    };
    
    module.exports.getStudents = () => {
        return students;
    };
    
    module.exports.getStudent = id => {
        let index = findIndex(+id);
        if (index >= 0) {
            return students[index];
        } else {
            return false;
        }
    };
    module.exports.addStudent =  student => {
        if (student) {
            student.studentId = i++;
            students.push(student);
            return true;
        } else {
            return false;
        }
    };
    
    module.exports.putStudent = (student) => {
    // console.log("put students before", students);
     let index = findIndex(student.studentId);
      if (index) {
        students[index].studentname = student.studentname;
       students[index].studentAddress = student.studentAddress;
       students[index].Class = student.Class;
      // console.log("put students after", students);
       return true;
       } else {
           return false;
      }
    };
    
    module.exports.deleteStudent = id => {
        let index = findIndex(id);
        if (index) {
            students.splice(index, 1);
            return true;
        } else {
            return false;
        }
    };