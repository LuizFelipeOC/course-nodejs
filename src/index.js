const express = require("express");
const app = express();
const dontenv = require('dotenv');
const connectionDatabase = require('../src/database/connect');
const UserModel = require('./models/user.model');
// dontenv.config();


connectionDatabase()

app.use(express.json());

app.post('/register', (req, res)   => {

  try {
  const user =  UserModel.create(req.body);

  return res.status(201).json({
    message: "Usuário criado com sucesso!"
  })
    
  } catch (error) {
    if(error.message = "User validation failed"){
      return res.status(422).json({
        message: `Erro ao validar: ${error.message}`
      });
    }
    
    // console.log(error);
  }


});

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json({
      users: [
        users,
      ]
    })
  } catch (error) {
    res.status(500).json({
      message: "error",
    })
  }
});


app.listen(3000);

