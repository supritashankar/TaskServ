var fetch = require('./fetch.js')

Promise.all([
  fetch('bears.txt'),
  fetch('cats.txt'),
]).then(function (values) {
  var bears = values[0]
  var cats = values[1]
  console.log(bears, cats)
})
