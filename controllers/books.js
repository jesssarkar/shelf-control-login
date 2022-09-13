const Book = require('../models/Book')

module.exports = {
    viewBooks: async (request,response)=>{
        try{
            db.collection('Cluster0').find().sort({likes: -1}).toArray()
            .then(data => {
                response.render('bookvote.ejs', { info: data })
            })
        }catch(err){
            console.log(err)
        }
    },





}