import os from "os";
const getOSDetails = () => {
    try {
      const arch =  os.arch();
      console.log(arch);   
      const totalMem = os.totalmem();
      console.log(totalMem/1024*1024);   
      const freeMem = os.freemem();
      console.log(freeMem/1024*1024);          
    } catch (error) {
      console.log("unable to get architecture of os");     
    }
}
getOSDetails();