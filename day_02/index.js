import { appendFileSync,readFileSync,writeFileSync } 
from "./readAndWriteFile.js";

console.log("before read");
readFileSync("./example.txt");
console.log("after read");

console.log("before write");
writeFileSync("./example.txt","added data");
console.log("after write");

console.log("before append");
appendFileSync("./example.txt","appended data");
console.log("after append");
