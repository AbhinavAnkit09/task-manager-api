const express  = require('express')
require('./db/mongoose')   // required this file so that mongoose connects to database
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())   // to parse incoming json to an object

app.post('/users', (req,res) => {
    const auser = new User( req.body)

    auser.save().then( () => {
        res.status(201).send(auser)
    }).catch( (e) => {
        res.status(400).send(e)  // to send status correctly
    })
});

app.get('/users', (req,res) => {
    User.find({}).then( (users) => {
        res.send(users)
    }).catch( (e) => {
        res.status(500).send()
    })
});

app.get('/users/:id', (req,res) => {
    const _id = req.params.id

    User.findById(_id).then( (aUser) => {
        if(!aUser) {
            return res.status(404).send()
        }

        res.send(aUser)

    }).catch( (e) => {
        res.status(500).send()
    })

});

app.post('/tasks', (req,res) => {
    const atask = new Task(req.body)

    atask.save().then( () => {
        res.status(201).send(atask)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

app.get('/tasks', (req,res) => {
    Task.find( {} ).then( (tasks) => {
        res.send(tasks)
    }).catch( (e) => {
        res.status(500).send()
    })
});

app.get('/tasks/:id', (req,res) => {
    const _id = req.params.id

    Task.findById(_id).then( (aTask) => {
        if(!aTask) {
            return res.status(404).send()
        }

        res.send(aTask)

    }).catch( (e) => {
        res.status(500).send()
    })
});




app.listen(port, () => {
    console.log('Server is up on port '+port)
});