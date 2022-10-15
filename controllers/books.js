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

    viewSearch: (req,res)=>{
        res.render('booksearch.ejs')
    },

    viewBookbyID: async (req, res) =>{
        try {
            const book = await Book.findById(req.params.id);
            res.render("book.ejs", { book: book});
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
                    userId: req.user.id,
                    description: req.body.description,
                   
            },
        )
            console.log('Book has been added!')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },

    deleteBook: async (req, res) => {
        console.log(req.body.name)
        try{
            await Book.findOneAndDelete({name: req.body.name})
            console.log('Book Deleted')
            res.json('Book Deleted')
        }catch(err){
            console.log(err)
        }
    
    },
    
    addLike: async (req, res) => {
        try{
         await Book.updateOne({name: req.body.name},{
            $set: {
                likes:req.body.likes + 1
              }
        },{
            sort: {_id: -1},
            upsert: true
        })
        console.log('Added Like')
        res.json('Added Like')
    }catch(err){
        console.log(err)
    }
},



}