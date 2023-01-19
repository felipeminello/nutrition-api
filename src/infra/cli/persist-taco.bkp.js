const { readFile, utils } = require('xlsx')
const path = require('path')
const fs = require('fs')
const readline = require('readline')

const filePath = path.resolve('data', 'taco.csv')
const csv = fs.readFileSync(filePath, {
  encoding: 'utf-8'
})

function isNumeric(num){
  return !isNaN(num)
}

const rl = readline.createInterface({
  input: fs.createReadStream(filePath, {
    encoding: 'utf-8'
  }),
  crlfDelay: Infinity
})

rl.on('line', line => {
  const data = line.split(',')

  if (isNumeric(data[0])) {
    console.log('d', data)
  }
 
  // console.log('line: %s', line)
})
