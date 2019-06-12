var express = require('express');
var router = express.Router();

//Hello world
router.get("/teste", function (req, res) {
    res.status(200).json({ message: 'May the force be with you!' });
});

module.exports = router;