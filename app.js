const express = require('express')
const bodyParser = require('body-parser');
// let ejs = require('ejs');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const today = new Date();
    const currentDay = today.getDay();
    const day = "";


    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;

        default:

            break;
    }

    res.render('list', {
        kindOfDay: day
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})