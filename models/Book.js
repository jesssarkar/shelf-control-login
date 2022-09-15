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
  //change userid required back to true
  userId: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Book', BookSchema)
