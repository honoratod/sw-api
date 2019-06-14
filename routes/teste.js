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

router.get("/testefor", function (req, res) {

    let planetasLista = [
        {
            nome: 'teste1',
            clima: 'clima1',
            id: 4
        }, {
            nome: 'teste2',
            clima: 'clima1',
            id: 6
        }, {
            nome: 'teste3',
            clima: 'clima1',
            id: 7
        }
    ];

    //Array de promessas
    var promiseArray = [];
    //Executa o loop para obter os valores de quantidade de aparições para cada planeta
    for (let i = 0; i < planetasLista.length; i++) {
        promiseArray.push(retornaQtdFilmes(planetasLista[i].id)
            .then((title) => {
                //Adiciona a informação obtida
                console.log("resultado1");
                planetasLista[i]["title"] = title;
            })
            .catch(err => {
                console.log("Err:" + err)
                planetasLista[i]["title"] = '';
            })
        )
    }

    //Aguarda a listagem de todas as quantidades de aparições (retorno de todas as promises)
    Promise.all(promiseArray).then((title) => {
        console.log("await");
        res.status(200).json(planetasLista);
    }).catch(err => {
        res.status(200).json(planetasLista);
    })
});

function retornaQtdFilmes(nome) {
    options = {
        url: 'http://jsonplaceholder.typicode.com/todos/' + nome,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        }
    };

    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error || response.statusCode != 200) {
                reject('Desconhecido');
            } else {
                let infoPlaneta = JSON.parse(body);
                resolve(infoPlaneta.title);
            }
        })
    })

}


module.exports = router;
