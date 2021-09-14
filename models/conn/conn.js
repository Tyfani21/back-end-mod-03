const mongoose = require('mongoose');
// url de conexao -> mongodb://servidor:porta/nome do banco
// useNewUrlParser --> Para que o Moongoose use o novo sistema de Url
// useUnifiedTopology --> Mecanismo de monitoramento de Banco de Dados
const username = 'db_user'
const password = 'q8nLNP95iveKT4W'


function Conn(url,user,pass, banco){
    mongoose.connect(`${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`MongoDB connected -> mongodb+srv://${username}:${password}@cluster0.u90bu.mongodb.net/to-dolist?retryWrites=true&w=majority`);
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Conn;