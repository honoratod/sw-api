var express = require('express');
var router = express.Router();
const Planeta = require('../models/planeta');
//import Planeta from "../models/planeta";

/**Lista planetas */
router.get('/', function (req, res) {

    //Verifica se foi enviada a informação do nome para filtrar
    let nome = req.query.nome;
    let filtro = {};
    if(nome)
        filtro = {"nome" : nome};
    

    Planeta.find(filtro).exec(function (err, planetas) {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(planetas);
    });
});

/**Lista os dados do planeta pelo ID */
router.get('/:id', function (req, res) {

    var id = req.params.id;

    Planeta.findById(id).exec(function (err, planetas) {
        if (err) {
            if(err.name && err.name == "CastError")
                return res.status(404).json({message:'parametros invalidos.'});
            else    
                return res.status(500).json(err);
        }
        res.status(200).json(planetas);
    });
});

/** Insere novo planeta */
router.post('/', function (req, res) {

    console.log(req.body);
    let vNome = req.body.nome;
    let vClima = req.body.clima;
    let vTerreno = req.body.terreno;
    if(!vNome || !vClima || !vTerreno)
        return res.status(400).json({message:'parametros invalidos.'});

    data = {
        nome: vNome,
        clima: vClima,
        terreno: vTerreno
    };
    console.log(data);
    Planeta.create(data, function (err, retorno) {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(retorno);
    })

});

/** Remove o planeta pelo ID */
router.delete('/:id', function (req, res) {

    var id = req.params.id;

    Planeta.findByIdAndDelete(id).exec(function (err, retorno) {
        if (err) {
            return res.status(500).json(err);
        }else if(!retorno)
            res.status(400).json({message:'planeta não encontrado.'});
        res.status(200).json(retorno);
    });
});

/** Atualiza o planeta pelo ID */
router.put('/:id', function (req, res) {

    var id = req.params.id;

    console.log(req.body);
    let vNome = req.body.nome;
    let vClima = req.body.clima;
    let vTerreno = req.body.terreno;
    if(!id || !vNome || !vClima || !vTerreno)
        return res.status(400).json({message:'parametros invalidos.'});

    data = {
        nome: vNome,
        clima: vClima,
        terreno: vTerreno
    };
    console.log(data);
    Planeta.findByIdAndUpdate(id, data).exec(function (err, retorno) {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(retorno);
    })
});

module.exports = router;