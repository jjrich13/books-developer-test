const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const dummyArray = ['One', 'Two', 'Three']

router.get('/',(req, res) => {
    pool.query('SELECT * FROM books').then(response => {
        res.send(response.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
    
})

router.post('/', (req, res) => {
    pool.query(`INSERT INTO books ("ISBN","title","description")
        VALUES($1, $2, $3)`, 
        [req.body.ISBN, req.body.title, req.body.description]
    ).then(response => {
        res.sendStatus(201)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
})

module.exports = router;