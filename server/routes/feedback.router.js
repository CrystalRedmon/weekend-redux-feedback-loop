const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET DB info
router.get('/', (req, res) => {
    console.log('server feedback');
    const sqlText = `SELECT * FROM "feedback";`;

    pool.query(sqlText)
        .then(result => {
            res.send(result.rows);
            console.log('DB GET successful', result.rows);
        })
        .catch(error => {
            resSendStatus(500);
            console.log('DB GET failed: ', error);
        });

    router.post('/', (req, res) => {
        const feedback = req.body;

        console.log(req.body);

        const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                            VALUES ($1, $2, $3, $4);`;

        const sqlParams = [
            feedback.feeling,
            feedback.understanding,
            feedback.support,
            feedback.comments
        ]

        pool.query(sqlText, sqlParams)
            .then(dbRes => {
                console.log('POST successful');
                res.sendStatus(201);
            })
            .catch(error => {
                console.log('POST failed, ', error);
                res.sendStatus(500);
            });
    });
});

module.exports = router;