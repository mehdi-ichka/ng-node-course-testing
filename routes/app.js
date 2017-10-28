var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;

// cd "C:\Program Files\MongoDB\Server\3.4\bin"
// ./mongod --dbpath "C:\Users\Mehdi Ichkarrane\mongo-data"