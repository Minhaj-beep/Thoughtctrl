if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')
const allShortsRoute = require('./routes/allshorts')
const allLanguage = require('./routes/allLanguage')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({limit: '10mb', extended:false}))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.error("DB connected"))

app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/allshorts', allShortsRoute)
app.use('/alllanguage', allLanguage)
// akbarenglish akbarhindi alien backbenchers horrorenglish nrenglish panchatantra premium rohanrobothindi tenalienglish


app.listen(process.env.PORT || 3000)


//vFZQmAj1nU0jZ7qi
//122.185.234.86