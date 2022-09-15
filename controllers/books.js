const Book = require('../models/Book')

module.exports = {
    viewBooks: async (request,response)=>{
        try{
            console.log(Book)
            Book.find().sort({likes: -1})
            .then(data => {
                response.render('books.ejs', { info: data })
            })
        }catch(err){
            console.log(err)
        }
    },

    addBook: async (req, res) => {
        try{
        await Book.create(
            {
                    name: req.body.name,
                    author: req.body.author,
                    thumbnail: req.body.thumbnail,
                    likes: 0,
                   
            },
        )
            console.log('Book has been added!')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    





}