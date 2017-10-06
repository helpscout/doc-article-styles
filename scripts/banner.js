const fs = require('fs')
const glob = require('glob')
const path = require('path')
const pkg = require('../package.json')

const homepage = function() {
  if (pkg.homepage) {
    return ' ('+ pkg.homepage +')'
  }
  else {
    return ''
  }
}

const description = 'Doc Article CSS'
const makeBanner = (platform = 'web') => {
  return ['/**',
    ' * '+ pkg.name +' v'+ pkg.version + homepage(),
    ' * '+ description,
    ' * '+ platform,
    ' */',
    ''].join('\n')
}

glob.sync('./dist/**/*.{css,scss}').forEach(file => {
  const filePath = path.resolve(file)

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return console.log(err)
    }
    const platform =
      file.match(/web/) ? 'Web' :
      file.match(/ios/) ? 'iOS' :
      file.match(/android/) ? 'Android' :
      ''
    const fileBanner = makeBanner(platform)
    const content = fileBanner + '\n' + data

    fs.writeFile(filePath, content, 'utf-8', err => {
      if (err) {
        return console.log(err)
      }
    })
  })
})

// fs.readdir(dir, function(err, files) {
//   if (err) {
//     console.error('Could not list the directory.', err)
//     process.exit(1)
//   }

//   files.forEach(function(file, index) {
//     fs.readFile(dir + file, 'utf-8', function(err, data) {
//       if (err) {
//         return console.log(err)
//       }

//       data = banner + data

//       fs.writeFile(dir + file, data, 'utf-8', function(err) {
//         if (err) {
//           return console.log(err)
//         }
//       })
//     })
//   })
// })
