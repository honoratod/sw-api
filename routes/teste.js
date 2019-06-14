var express = require('express');
var router = express.Router();
var request = require('request');

//Hello world
router.get("/teste", function (req, res) {
    res.status(200).json({ message: 'May the force be with you!' });
});


router.get("/testeSw", function (req, res) {
    options = {
        url: 'https://swapi.co/api/planets/?format=json&search=Alderaan',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        }
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body);
        }
        let infoPlaneta = JSON.parse(body);
        //console.log(infoPlaneta.results[0].films.length);
        res.status(200).json(infoPlaneta);
    })
});

module.exports = router;