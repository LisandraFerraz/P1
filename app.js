const express = require('express')
const app = express


app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.nome,
        idade: req.idade,
        telefone: req.telefone,
        email: req.email
    })
    .then(function(){
        res.redirect('/')
    })
    .catch(function(erro){
        console.log("Não foi possível realizar o cadastro")
    })
})

app.get("/listar", function(req, res){
    
})

app.get("/delete/:id", function(req,res){
    try {
        return req.
    } catch (error) {
        console.log("Não foi possível excluir da base de dados. Detalhes:" + error)
    }
})

app.listen(3000, ()=>{
    console.log("conexão bem sucedida.")
})