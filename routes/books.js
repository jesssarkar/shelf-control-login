const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books') 
const { ensureAuth } = require('../middleware/auth')

//add back ensure auth
router.get('/', booksController.viewBooks)



module.exports = router