const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const today = new Date()
    if (today.getDate() === 6) {
        res.send("yay it's weekend")
    } else {
        res.send("Boo! I have to work today")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})