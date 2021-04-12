const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req,res) => {
    res.writeHead(200, {
        "Content-Type": 'text/html'
    })
/*     // Проверка url ( "/" )
    console.log(req.url); */

    if (req.url === '/') {
        fs.readFile(path.join('./', 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                "Content-Type": 'text/html'
            })
            res.end(data)
        })
    } else if (req.url === '/contact') {
        fs.readFile(path.join('./', 'public', 'contact.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                "Content-Type": 'text/html'
            })
            res.end(data)
        })
    } 


   // res.end(`<h1>HELLO How are? Node JS</h1>`)
})

server.listen(3000, () => {
    console.log('Server has been started...!')
/*     console.log(path.join('jopa'));
    console.log(__dirname); */
}) 

