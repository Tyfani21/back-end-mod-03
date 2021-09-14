const express = require('express');
const router = express.Router();
const Tarefa = require('../models/do-list');
const Controller = require('../controllers/to-dolist.controllers');

router.post("/add", async (req, res) => {
   // if(Controller(req.header)){
      await Tarefa.create(req.body)
        .then(() => {
            res.status(200).send("Tarefa adicionada com sucesso");
        }).catch((err) => {
            res.status(400).send("Algo errado aconteceu, tente novamente");
            console.error(err);
        })
    //}else{
      //  res.status(403).end();
    //}
});

router.get('/', async (req, res) => {
    await Tarefa.find({})
    .then((tarefas) => {
        res.status(200).send(tarefas);
    })
    .catch((err) => {
        res.status(400).send("Algo errado aconteceu, tente novamente");
        console.log(err);
    })
});

router.get('/findById/:id', async (req, res) => {
    await Tarefa.find({_id : req.params.id})
    .then((tarefas) => {
        res.status(200).send(tarefas);
    })
    .catch((err) => {
        res.status(400).send("Algo errado aconteceu, tente novamente");
        console.log(err);
    })
});

router.get('/findByName/:name', async (req, res) => {
    await Tarefa.find({nome : req.params.name})
    .then((tarefas) => {
        res.status(200).send(tarefas);
    })
    .catch((err) => {
        res.status(400).send("Algo errado aconteceu, tente novamente");
        console.log(err);
    })
});

router.put("/update/:id", async (req, res) => {
    await Tarefa.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado aconteceu, tente novamente");
        console.log(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
    await Tarefa.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Deletado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado aconteceu, tente novamente");
        console.log(err);
    });
});


module.exports = router;