
class Controller {
    static homepage(req, res) {
        res.render('home')
    }

    static addbook(req, res) {
        res.render('formaddbook.ejs')
    }

    static createbook(req, res) {
        let newbook = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            birth_date: req.body.birth_date
        }

        Model.create(newbook, function (err) {
            if (err) {
                res.send(err.message)
            } else {
                res.redirect('/book')
            }
        })
    }

    static formEditbook(req, res) {
        let bookId = req.params.bookId
        Model.findbyid(bookId, function (err, result) {
            if (err) {
                res.send(err.message)
            } else {
                res.render('formeditbook.ejs', { book: result })
            }
        })

    }

    static updatebook(req, res) {
        let student = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            email: req.body.email,
            birth_date: req.body.birth_date
        }
        let bookId = req.params.bookId

        Model.update(bookId, student, function (err) {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/book')
            }
        })
    }

    static deletebook(req, res) {
        let bookId = req.params.bookId
        Model.destroy(bookId, function (err) {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/book')
            }
        }
    }
}

module.exports = Controller