const path = require('path') // Доступен всегда, не нужно подключать

console.log('Name of file -> ' ,path.basename(__filename))

console.log('Name of directory -> ' ,path.dirname(__filename))

console.log('Name of extention -> ' ,path.extname(__filename))

console.log('Parse -> ' ,path.parse('htts://www.yahoo.com/'))
console.log('Parse .name example -> ' ,path.parse(__filename).name)

// C:\GitHub\11-4-21 node express test\demo\server\index.html
console.log(path.join(__dirname, 'server', 'index.html'))