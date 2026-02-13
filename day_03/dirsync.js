import fs from "fs";
const readDirSync = ()=>{
    fs.readdirSync();
}
const makeDirSync = ()=>{
    fs.mkdirSync();
}
const removeDirSync = ()=>{
    fs.rmdirSync();
}