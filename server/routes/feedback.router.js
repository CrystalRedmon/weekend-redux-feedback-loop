const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET DB info
router.get('/', (req, res)=>{
    console.log('GET /api/pizza');
    const sqlText = `SELECT * FROM "feedback";`;
    
    pool.query(sqlText) 
    .then(result=>{
        resSend(result.rows);
        console.log('DB GET successful');
    })
    .catch(error=>{
        resSendStatus(500);
        console.log('DB GET failed: ', error);
    });
});

module.exports = router;