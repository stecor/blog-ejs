const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const homeStartContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum.`

const aboutContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum.`

const contactContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum.`

const posts = []

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.render('home', { StartContent: homeStartContent })
  console.log(posts)
})

app.get('/about', function (req, res) {
  res.render('about', { aboutContent: aboutContent })
})

app.get('/contact', function (req, res) {
  res.render('contact', { contactContent: contactContent })
})

app.get('/compose', function (req, res) {
  res.render('compose')
})

app.post('/compose', function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postText,
  }
  posts.push(post)
  res.redirect('/')
})

app.listen(3000, function () {
  console.log('Server running port 3000')
})
