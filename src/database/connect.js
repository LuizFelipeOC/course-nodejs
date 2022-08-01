const moongose = require('mongoose');

const connectionDatabase = async () => {


    const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ycdi3.mongodb.net/?retryWrites=true&w=majority`;
    console.log(url);


    await moongose.connect(url).then(
        () => {
            console.log('Conectado no banco');
        }
    ).catch(
        (error) => {
            console.log('Erro de conexão');
        }
    );
     
}

module.exports = connectionDatabase;