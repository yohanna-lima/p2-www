let db = require('../data')
const {v4: uuidv4} = require('uuid')

const urlBase = '/tasks'

module.exports = (router) => {

    router.get(urlBase, (req, res) => {
        res.json(db)
    })
    
    router.get(urlBase + '/:id', (req, res) => {
        let id = req.params.id;
        let index = db.findIndex(t => t.id == id);
        if (index !== -1) {
            res.json(db[index])
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada.' });
        }
    })
    
    router.post(urlBase, (req, res) => {
        let newTask = {
            id: uuidv4(),
            nome: req.body.nome,
            finalizada: req.body.finalizada,
            dataCadastro: req.body.dataCadastro,
            dataFinal: req.body.dataFinal
        }
    
        db.push(newTask)
        res.status(200).send()
    })


    router.put(urlBase + '/:id', (req, res) => {
        let id = req.params.id;
        let updatedTask = {
            id: id,
            nome: req.body.nome,
            finalizada: req.body.finalizada,
            dataCadastro: req.body.dataCadastro,
            dataFinal: req.body.dataFinal
        }
    
        let index = db.findIndex(t => t.id == id);
        if (index !== -1) {
            db[index] = Object.assign(db[index], updatedTask);
            res.status(200).send();
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada.' });
        }
    });
    
    

    router.delete(urlBase + "/:id", (req, res) => {
        const id = req.params.id
        const newListTasks = db.filter(t => t.id != id)

        db = newListTasks

        res.status(200).send()
    })
}