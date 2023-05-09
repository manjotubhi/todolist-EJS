const express = require('express')
const bodyParser = require('body-parser');
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workList = [];
// let ejs = require('ejs');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', (req, res) => {
    const today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("en-US", options)

    res.render('list', {
        listTitle: day,
        newListItems: items
    });
})

app.post('/', (req, res) => {

    console.log(req.body)
    let item = req.body.newItem;

    if (req.body.list === "Work List") {
        workList.push(item)
        res.redirect("/work")
    } else {

        items.push(item);
        res.redirect("/");
    }


});

app.get('/work', (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workList
    })
})

app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workList.push(item);
    res.redirect("/work")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})