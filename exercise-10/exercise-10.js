var student = {
    name: "Davide Rayy",
    sclass: "VI",
    rollno: 12,
}

/* const deleteRollno = () => {
    let newStudent = {}
    const studentKeys = Object.keys(student)
    studentKeys.forEach(key => {
        if(key !== "rollno") {
            newStudent = {...newStudent, [key]: student[key]}
        }
    })
    return newStudent
} */
//cleaner version
const deleteRollno = () => {
    delete student.rollno;
    return student;
}


console.log(student);
console.log(deleteRollno());

export {deleteRollno}