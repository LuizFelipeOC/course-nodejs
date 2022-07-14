const express = require('express');
const app = express();
const mongoose = require('mongoose');


const Person = require('./models/Person');


app.use(
    express.urlencoded(
        {
            extended: true,
        }
    )
)

app.use(express.json())

app.get('/', (req, res) => [

    res.json({
        message: 'Oi Express!'
    })

]);

app.post('/person', async (req, res) => {
    const {
        name, salaray, approved
    } = req.body;

    const person = {
        name,
        salaray,
        approved,
    }

    if(!name){
        res.status(422).json({
            error: "O nome não pode estar vazio!"
        });
    }

    try {
        await Person.create(person);

        res.status(201).json({
            success: 'Criado com sucesso'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        })
    }
})

const DB_USER = "sa_curso"
const DB_PASS = encodeURIComponent("sa_curso");

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ycdi3.mongodb.net/?retryWrites=true&w=majority`).then(
    () => {
        console.log('Conectado no banco');
        app.listen(3000);
    }
).catch(
    (error) => {
        console.log(error);
    }
);



// app.listen(3000)

