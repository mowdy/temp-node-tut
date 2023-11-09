const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page')
        console.log('Home page')
        return
    }
    if (req.url === '/about') {
        // res.end('About page')
        // return
        //BLOCKING CODE!!!
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
        console.log('About page')
        return
    }
    res.end('Error page')
    console.log('Error page')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000...')
})
