var express = require('express');
var router = express.Router();
var Message = require('../models/message');
var jwt = require('jsonwebtoken');

router.get('/', function (req, res, next) {
    Message.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occoured'
                    , obj: err
                });
            }
            res.status(201).json({
                message: 'Success'
                , obj: messages
            });
        });

});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authorised'
                , error: err
            })
        }
        next();
    });
});

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred'
                , obj: err
            })
        }
        res.status(201).json({
            message: 'Saved message'
            , obj: result
        });
    });
});

router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occoured'
                , obj: err
            })
        }
        if (!message) {
            return res.status(500).json({
                title: 'An error occoured'
                , error: {message: 'Message not found'}
            })
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occoured'
                    , obj: err
                })
            }
            res.status(200).json({
                message: 'Message updated succesfully'
                , obj: result
            })
        })
    });
});

router.delete('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occoured'
                , obj: err
            })
        }
        if (!message) {
            return res.status(500).json({
                title: 'An error occoured'
                , error: {message: 'Message not found'}
            })
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occoured'
                    , obj: err
                })
            }
            res.status(200).json({
                message: 'Message deleted'
                , obj: result
            })
        })
    });
});

module.exports = router;
