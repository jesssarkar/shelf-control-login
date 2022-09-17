const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books') 
const { ensureAuth } = require('../middleware/auth')

//add back ensure auth
router.get('/', booksController.viewBooks)

router.post('/addBook', booksController.addBook)

router.delete('/deleteBook', booksController.deleteBook)

router.put('/addLike', booksController.addLike)

module.exports = router

