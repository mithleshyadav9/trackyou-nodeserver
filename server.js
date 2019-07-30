const express = require('express')
const morgan =  require('morgan')
const PORT = process.env.PORT || 3000
const compression = require('compression')
const path = require('path')
const app = express()

app.use(morgan('dev'))
app.use(compression())

app.use(express.static(path.join(__dirname,'build')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})
app.listen(PORT)