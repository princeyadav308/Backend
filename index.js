require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000



app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/twitter', (req, res) =>{
    res.send('captianbruce')
})

app.get('/login', (req, res) =>{
    res.send('<h3>Please login to proceed</h3>')
})

app.get('/youtube', (req, res) =>{
    res.send('<h3>Welcome to Youtube</h3>')
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${port}`)
})