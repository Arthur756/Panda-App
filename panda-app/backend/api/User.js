const express = require('express');
const router = express.Router();

//mongodb user model
const User = require('./../models/User');

//Signup
router.post('/signup', (req, res) =>{
    let (name, email, password, cpf) = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    cpf = cpf.trim();

    if (name == "" || email == "" || password == "" || dateOfBirth == ""){
        res.json({
            status: "FAILED",
            message: "Entrada de campos vazios!"
        });
    } else if (!/[a-zA-Z]*$/.test(name)){
        res.json({
            status: "FAILED",
            message: "Entrada de nome inválido!"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Entrada de email inválido!"
        }) 
    } else if (!new cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)){
        res.json({
            status: "FAILED",
            message: "Entrada de cpf inválido!"
        })
    } else if (password.lenght < 8) {
        res.json({
            status: "FAILED",
            message: "Senha muito curta!"
        })
    } else {
        // Checagem se o usuário já existe
        User.find({email}).then(result => {
            if (result){
                // Usuário já existente
                res.json({
                    status: "FAILED",
                    message: "Usuário com email cadastrado já existente!"
                })
            } else {
                // Criando novo usuário
                
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "Um erro ocorreu ao procurar um usuário!"
            })
        })
    }
})
//Signin
router.post('/signin', (req, res) =>{

})

module.exports = router;