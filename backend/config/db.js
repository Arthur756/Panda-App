require('dotenv').config();
const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Banco de Dados conectado");
})
.catch((err) => console.log(err));

