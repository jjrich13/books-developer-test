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

module.exports = router;