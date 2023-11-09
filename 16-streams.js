const { createReadStream } = require('fs')
const { result } = require('lodash')

// const stream = createReadStream('./content/big.txt')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// data is the event in stream.Readable
stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))