// File System
const fs = require('fs')
const path = require('path')

// Event Loop ... V. Minin
/* fs.mkdir(path.join(__dirname, 'dir_test'), (err) => {
    if (err) {
        throw err
    }

    console.log('Dir created!');
}) */

// -------------------------------------------------------------------------------
// ------------------------------   Write File -------------------------------------

/* const filePath = path.join(__dirname, 'dir_test', 'text2.txt')

fs.writeFile(filePath, 'Hello FILE text2 CREATED', err => {
    if (err) {
        throw err
    }

    console.log('FILE text2 CREATED!');
}) */
// -------------------------------------------------------------------------------
// ------------------------------   Edit File -------------------------------------
/* const filePath = path.join(__dirname, 'dir_test', 'text2.txt')
const filePath = path.join(__dirname, 'dir_test', 'text2.txt')

fs.appendFile(filePath, '\nHello NEW ROW FILE text2 CREATED', err => {
    if (err) {
        throw err
    }
})
    console.log('NEW ROW to FILE text2 CREATED!') */
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// ------------------------------   Read File -------------------------------------
/* const filePath = path.join(__dirname, 'dir_test', 'text2.txt')

fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err
    }
    // BUFFER object
   // console.log('Content -> ', content)

   // read from Buffer
    const data = Buffer.from(content)
    console.log('Content: ', data.toString());


})  */
// -------------------------------------------------------------------------------
// ------------------------------   Read File  UTF-8 -------------------------------------
const filePath = path.join(__dirname, 'dir_test', 'text2.txt')

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
   // read from Buffer
    console.log(content)
}) 