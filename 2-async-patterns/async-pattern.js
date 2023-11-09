// 这段代码使用 Node.js 中 fs 模块的 promise 版本,来演示一个读取文件内容并写入新文件中的异步操作。
// 具体来看:
// 1. 引入 fs 模块的 promise 版本的读取和写入方法。
// 2. 定义一个 async 函数 start 来处理主要逻辑。
// 3. 在 try 中,使用 await 依次读取两个文件内容。
// 4. 将读取结果拼接成字符串,await 异步写入到新文件中。
// 5. 如果任何步骤发生错误,catch 区块会捕获错误并打印。
// 6. 最后调用 start 函数来启动执行。
// 等待每个异步操作完成再继续执行下一个异步操作,可以保证代码执行顺序,也方便使用读取结果。
// 整体来说,这段代码展示了如何使用 async/await 来与 Node.js 中的异步 IO 配合,通过同步代码的方式来组织异步操作,使其顺序执行而避免回调地狱。
// 这种编写异步代码的方式比回调函数更加直观易读。 (edited) 

const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         }
//         )
//     }
//     )
// }

// getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt', 
        `THIS IS AWESOME: ${first} ${second}`,
        { flag: 'a' }
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)

    }
}

start()

// readFile('./content/first.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     } else {
//         console.log(data)
//     }
// }
// )