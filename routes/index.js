const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller')

router.get('/',Controller.homepage)
router.get('/add', Controller.addbook)
router.post('/add',Controller.createbook)
router.get('/edit/:bookId',Controller.formEditbook)
router.post('/edit/:bookId',Controller.updatebook)
router.get('./delete:bookId',Controller.deletebook)

module.exports = router