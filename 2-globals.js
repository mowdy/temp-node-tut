// GLOBALS — NO WINDOW ! ! ! !

// __dirname — path to current directory
// __filename — file name
// require — function to use modules (CommonJS)
// module — info about current module (file)
// procers — info about env where the program is being executed

// 这段JavaScript代码使用了 setInterval() 来实现一个定时重复执行的功能。
// setInterval()这个方法可以设置一个定时器,在指定的时间间隔重复执行提供的函数。
// 该代码的详细解释如下:
// 1. setInterval() 方法接受两个参数。第一个参数是一个函数,第二个参数是一个时间间隔毫秒数。
// 2. () => {} 这是一个箭头函数的语法,等同于:
// function() {
//   console.log('HELLO WORLD');
// }
// 3. 所以这个箭头函数就是需要定期执行的代码块。
// 4. 1000表示时间间隔为1000毫秒,也就是1秒。
// 5. setInterval()会每隔1秒调用一次这个箭头函数,在函数内部执行console.log打印输出。
// 6. 由此形成一个每1秒打印一次"HELLO WORLD"的循环。
// 7. 如果想停止这个定时执行,需要调用clearInterval(),并传入setInterval()的返回值。
// 总结:
// setInterval() 配合箭头函数可以方便地实现定时重复执行代码的效果。这个案例实现了一个简单的每秒打印一次的定时器代码。 (edited) 

console.log(__dirname);
setInterval(() => {
    console.log('HELLO WORLD')
}, 1000)
