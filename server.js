//mongodb
require('./backend/config/db');

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require('./backend/api/User');

// Para aceitar posteriormente dados de form
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter)

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})