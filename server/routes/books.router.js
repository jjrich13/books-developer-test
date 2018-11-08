const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const dummyArray = ['One', 'Two', 'Three']

router.get('/',(req, res) => {
    console.log('go to get');
    res.send(dummyArray)
    
})

module.exports = router;