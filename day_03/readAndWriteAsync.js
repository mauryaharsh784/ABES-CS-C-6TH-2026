import fs from "fs/promises"
const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data);
        console.log("Data has been appended successfully.");
    } catch (error) {
        console.log("unable to append file");
    }
}
appendFile("./example.txt","this data has been appended")



const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        console.log(data);
    } catch (error) {
        console.log("unable to read");
    }
}
// readFile("./example.txt");




const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("Data has been written successfully.");
    } catch (error) {
        console.log("Unable to write");
    }
}

// writeFile("./example.txt","This data has been written through async fun of fs")
