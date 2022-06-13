const os=require('os')
console.log("Platform:"+os.platform());
console.log("Architecture:"+os.arch());
console.log("Type:"+os.type());
console.log("release version:"+os.release());
console.log("Total mem in Bytes:"+os.totalmem());
console.log("Free mem in Bytes:"+os.freemem());
var c=os.cpus();
console.log("Total no of cpus:"+c.length);
