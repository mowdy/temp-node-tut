// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important infO about project/package), 3 ways below to create it
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init —y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItem= _.flattenDeep(items)
console.log(newItem)
console.log('Hello Jessie')
