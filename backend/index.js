const express = require('express');
const app = express();
const port = process.env.PORT || 8989
const con = require('./connect.js')

app.get('/', function(req, res) {
    res.send('Third party application')
})
 app.listen(port, () => {
    console.log(`Sample app listening at http://localhost:${8989}`)
 })