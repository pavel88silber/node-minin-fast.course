const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req,res) => {
    res.writeHead(200, {
        "Content-Type": 'text/html'
    })


    let filePath = path.join('./', 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    // Add an extention .html  if no exists
    if (!ext) {
        filePath += '.html'
    }

    console.log(filePath);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join('./', 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end("Error")
                } else {
                    res.writeHead(200, {
                        'Content-Type' : contentType
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type' : contentType
            })
            res.end(content)
        }
    })
})

const PORT = process.env.PORT || 3000


server.listen(PORT, () => {
    console.log(`Server has been started...! ${PORT}`)
}) 
