const express = require('express');
const router = express.Router();

//mongodb user model
const User = require('./../models/User');

//Password handler
const bcrypt = require('bcrypt');

//Signup
router.post('/signup', (req, res) =>{
    let {nome, email, senha, cpf} = req.body;
    nome = nome; //.trim();
    email = email; //.trim();
    senha = senha; //.trim();
    cpf = cpf; //.trim();

    if (nome == "" || email == "" || senha == "" || cpf == ""){
        res.json({
            status: "FAILED",
            message: "Entrada de campos vazios!"
        });
    } else if (!/[a-zA-Z]*$/.test(nome)){
        res.json({
            status: "FAILED",
            message: "Entrada de nome inválido!"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Entrada de email inválido!"
        }) 
    } else if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)){
        res.json({
            status: "FAILED",
            message: "Entrada de cpf inválido!"
        })
    } else if (senha.length < 8) {
        res.json({
            status: "FAILED",
            message: "Senha muito curta!"
        })
    } else {
        // Checagem se o usuário já existe
        User.find({email}).then(result => {
            if (result.length){
                // Usuário já existente
                res.json({
                    status: "FAILED",
                    message: "Usuário com email cadastrado já existente!"
                })
            } else {
                // Criando novo usuário
                
                // Password handling
                const saltRounds = 10;
                bcrypt.hash(senha, saltRounds).then(hashedSenha => {
                    const newUser = new User({
                        nome,
                        email,
                        senha: hashedSenha,
                        cpf
                    });
                    
                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Cadastro realizado com sucesso",
                            data: result,
                        })
                        .catch(err => {
                            res.json({
                                status: "FAILED",
                                message: "Um erro ocorreu ao salvar a conta do usuário!"
                            })
                        })
                    })
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "Um erro ocorreu ao executar o hashing de senha!"
                    })
                })
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
    let {email, senha} = req.body;
    email = email; //.trim();
    senha = senha; //.trim();

    if (email == "" || senha == ""){
        res.json({
            status: "FAILED",
            message: "Credenciais necessárias vazias"
        })
    } else {
        // Checar se o usuário existe
        User.find({email})
        .then (data => {
            if (data.length){
                // Usuário existe

                const hashedSenha = data[0].senha;
                bcrypt.compare(senha, hashedSenha).then(result => {
                    if (result){
                        // Senha bateu
                        res.json({
                            status: "SUCCESS",
                            message: "Login com sucesso!",
                            data: data
                        })
                    } else {
                        res.json({
                            status: "FAILED",
                            message: "Senha inserida incorreta!"
                        })
                    }
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: `${email, senha, data[0].senha}/ Um erro ocorreu ao comparar a senha inserida com a do banco.`
                    })
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "Credencias inseridas inválidas!"
                })
            }
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "Um erro ocorreu ao buscar a existência do usuário no banco."
            })
        })
    }
})

module.exports = router;