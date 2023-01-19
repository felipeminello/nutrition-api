const path = require('path')
const fs = require('fs')
const { parse } = require('csv-parse')
const mongoose = require('mongoose')

const filePath = path.resolve('data', 'taco.csv')

mongoose.connect('mongodb://minello:camarao@localhost:27017/nutrition?authSource=admin').then(() => {
  const { db } = mongoose.connection

  const now = new Date()

  fs.createReadStream(filePath, {encoding: 'utf-8'})
    .pipe(parse({ delimiter: ',', from_line: 2 }))
    .on('data', function (row) {
      let preparationCode = +row[2]

      if (preparationCode === 99) {
        preparationCode = undefined
      }
      db.collection('food').insertOne({
        code: +row[0],
        name: row[1],
        preparationCode,
        calories: +row[4],
        protein: +row[5],
        fat: +row[6],
        carbs: +row[7],
        fiber: +row[8],
        createdAt: now,
        updateAt: now
      }).then(() => {
        console.log('insert row: %s', row)
      })
    })
    .on('end', function () {
      console.log('finished')
    })
    .on('error', function (error) {
      console.log(error.message)
    })
})
