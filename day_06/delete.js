import { readJsonFile, writeJsonFile } from "../day_05/readAndWriteServices.js";

const FILE = "../day_05/student1.json";

const deleteData = async (id) => {
    const students = await readJsonFile(FILE);

    if (!students || students.length === 0) {
        return console.log("No students found.");
    }

    const user = students.find(student => student.id === id);

    if (!user) {
        return console.log("Student not found.");
    }

    const updatedStudents = students.filter(student => student.id !== id);

    await writeJsonFile(FILE, updatedStudents);

    console.log("Student deleted successfully with id:", id);
};

deleteData(1);