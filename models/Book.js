const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
 
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Book', BookSchema)
