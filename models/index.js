const e = require('express')
const pool = require('../config/connection')

class Book {
    constructor(id, name, desc) {
        this.id = +id
        this.name = name
        this.desc = desc
    }
}

module.exports = Book