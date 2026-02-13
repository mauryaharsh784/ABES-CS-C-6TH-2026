import fs from "fs/promises";

const status = async (path) => {
    try {
      const stats = await fs.stat(path);
      console.log(stats.size);
      console.log(stats.isFile());
      console.log(stats.isDirectory());           
    } catch (error) {
     console.log("unable to check status");     
    }
}
status("./dir.js")