var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.post('/', function (req, res, next) {
    var message = new message({
        content: req.body.content
    });
    message.save(function (err, result) {
        if (err) {
            return res.statusCode(500).json({
                title: 'An error occurred'
                , obj: err
            })
        }
        res.statusCode(201).json({
            message: 'Saved message'
            , obj: result
        })
    });
});

module.exports = router;
