var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Uptime
console.log('uptime: ' + os.uptime() + " sek.");

// Load AVG
console.log('load avg : ' + os.loadavg() + " %");