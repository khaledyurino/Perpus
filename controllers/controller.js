const Model = require("../../P1/school-application-mvc/models/models")

class Controller {
    static homepage(req, res) {
        res.render('home')
    }

    static addbook(req, res) {
        res.render('addbook')
    }

    static createbook(req,res){
        let newBook = {
            book_name : req.body.book_name,
            desc : req.body.desc
        }

        Model.create(newBook,function(err){
            if(err){
                res.send(err.message)
            } else {
                res.redirect('/home')
            }
        })
    }
}

module.exports = Controller