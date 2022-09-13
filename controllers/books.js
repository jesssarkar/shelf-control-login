const Book = require('../models/Book')

module.exports = {
    viewBooks: async (request,response)=>{
        try{
            console.log(Book)
            Book.find().sort({likes: -1})
            .then(data => {
                response.render('bookvote.ejs', { info: data })
            })
        }catch(err){
            console.log(err)
        }
    },





}