import fs from 'fs';

export const appendFileSync = (path, data) => {
    try {
        fs.appendFileSync(path, data);
        console.log("Data has been appended successfully.");
    } catch (error) {
        console.log("unable to append file");
    }
}

export const writeFileSync = (path, data) => {
    try {
        fs.writeFileSync(path, data);
        console.log("Data has been successfully written...");
    } catch (error) {
        console.log("unable to write data");
    }
}
export const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        console.log(data, "Data has been read successfully...");
    } catch (error) {
        console.log("unable to read data");
    }
}
// readFileSync("./example.txt");
// writeFileSync("./example.txt","This data has been written through sync func:writeFileSync()");
