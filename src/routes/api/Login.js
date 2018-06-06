const express = require('express');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const sha256 = require('sha256');
const crypto = require('crypto');
const router = express.Router();
const Teacher = require('./../../models/Teacher');

router.post('/api/login', function(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if(email === "" || password === "") {
        res.status(400).send('incorrect data');
    } else {
        Teacher.findOne({ email : email }, function (err, teacher) {
            if( err ) throw err;

            if(teacher.password !== password) {
                res.status(401).send('password incorrect!');
            } else {

                const tokenObject = {
                    'when':new Date(),
                    'hashedToken':hashed_token,
                };


                res.status(200).send('login successful!');
            }
        })
    }
});

module.exports = router;