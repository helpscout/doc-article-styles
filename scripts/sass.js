const fs = require('fs')
const glob = require('glob')
const harvester = require('seed-harvester')
const mkdirp = require('mkdirp')
const path= require('path')
const sass = require('node-sass')

const includePaths = harvester([
  './src/scss'
])

mkdirp.sync('./dist/css')
mkdirp.sync('./dist/scss')

const files = [
  'src/scss/styles.*.scss',
  'src/scss/components/*/styles.scss',
]

const parseFileName = (fileName) => {
  return fileName
    .replace('src/scss/', '')
    .replace('src/scss', '')
    .replace('.scss', '')
}

const createDir = (fileName) => {
  const dirName = path.dirname(fileName)
    .replace('src/scss/', '')
    .replace('src/scss', '')
  if (dirName.length && dirName.length > 1) {
    mkdirp.sync(`./dist/scss/${dirName}`)
    mkdirp.sync(`./dist/css/${dirName}`)
  }
}

const renderFile = (fileName) => {
  const baseFileName = parseFileName(fileName)
  // Default .css compile
  return sass.render({
    file: fileName,
    includePaths: includePaths,
    outputStyle: 'compact'
  }, function (error, result) {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      createDir(fileName)
      fs.writeFile(`./dist/css/${baseFileName}.css`, result.css, function (err) {
        if (err) {
          console.error(error)
          return process.exit(1)
        }
        console.log(`${baseFileName}.css created.`)

        fs.writeFile(`./dist/scss/${baseFileName}.scss`, result.css, function (err) {
          if (err) {
            console.error(error)
            return process.exit(1)
          }
          // console.log(`${baseFileName}.scss created.`)
        })
      })
    }
  })
}


files.forEach(file => glob.sync(file)
  .filter(fileName => fileName)
  .forEach(renderFile))
