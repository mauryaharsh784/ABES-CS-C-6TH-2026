import { readJsonFile, writeJsonFile } from "../day_05/readAndWriteServices.js";

const FILE = "../day_05/student1.json";

const updateData = async (id, name) => {
    const students = await readJsonFile(FILE);

    if (!students || students.length === 0) {
        return console.log("No students found.");
    }

    const student = students.find(student => student.id === id);

    if (!student) {
        return console.log("Student not found.");
    }

    const updatedStudents = students.map(student =>
        student.id === id ? { ...student, name } : student
    );

    await writeJsonFile(FILE, updatedStudents);
};

updateData(1, "Khushbu Singh Rajput");