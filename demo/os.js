const os = require('os')

console.log('Operation system ', os.platform);
console.log('Arch proccessor ', os.arch);
console.log('CPUs ', os.cpus());
console.log('Free memory ', os.freemem());
console.log('Total memory ', os.totalmem());
console.log('Total memory ', os.totalmem());
console.log('Home dir  ', os.homedir());
console.log('Power On  ', os.uptime());