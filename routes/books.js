const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', ensureAuth, booksController.viewBooks)

router.get('/booksearch', booksController.viewSearch)

router.post('/books/addBook', booksController.addBook)

router.delete('/deleteBook', booksController.deleteBook)

router.put('/addLike', booksController.addLike)

module.exports = router

