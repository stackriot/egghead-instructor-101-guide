var express = require('express')
var app = express()

app.set('port', process.env.PORT || 5000)

app.use(express.static(__dirname + '/_book'))

// views is directory for all template files
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// app.get('*', function(req, res) {
//   res.redirect('https://howtoegghead.com/instructors', '301')
// })

function redirectUnmatched(req, res) {
  res.redirect('https://howtoegghead.com/instructors', '301')
}

app.use(redirectUnmatched)
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
