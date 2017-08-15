var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/create', function(req, res, next) {
    console.log('');
    res.render('create_account')
});
router.post('/create', function(req, res) {
    console.log(req.body);
    models.Account.create({
        title: req.body.title,
        type: req.body.type,
        cost: req.body.cost
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/')

module.exports = router;
