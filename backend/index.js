const express = require('express');
const app = express();
const port = process.env.PORT || 8989
const con = require('./connect.js')
const bookRouter = require('./routes/book_routes')

app.use(express.json())
app.use('/book',bookRouter);

 app.listen(port, () => {
    console.log(`app listening at http://localhost:${8989}`)
 })