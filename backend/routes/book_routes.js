const express = require("express");
const router = express.Router();
const {getAllBooks,addBook,getbook,updateBook,removeBook} = require('../controllers/book_cont')

router.get('/allBooks',getAllBooks);
router.post('/addBook',addBook)
router.get('/:id',getbook);
router.put('/:id',updateBook);
router.delete('/:id',removeBook);

module.exports = router;