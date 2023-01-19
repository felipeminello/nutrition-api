const { readFile, utils } = require('xlsx')
const path = require('path')
const fs = require('fs')

try {
  const filePath = path.resolve('data', 'taco.xlsx')

  console.log('filePath', filePath)

  const xlsx = readFile(filePath)

  // const csv = utils.sheet_to_csv(xlsx.Sheets[xlsx.SheetNames[0]])
  // const json = utils.sheet_to_json(xlsx.Sheets[xlsx.SheetNames[0]])

  // fs.writeFileSync(path.resolve('data', 'taco.json'), Buffer.from(JSON.stringify(json)), {
  //   encoding: 'utf-8'
  // })

  // console.log('Write JSON')

  // fs.writeFileSync(path.resolve('data', 'taco.csv'), csv, {
  //   encoding: 'utf-8'
  // })

  console.log('Write CSV')
} catch (err) {
  console.error(err)

  process.exit(0)
}