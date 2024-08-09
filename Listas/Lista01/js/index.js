const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

let produtos = [
    {
        nome: "Bolu de murangu",
        valor: 10000,
        descricao: "Hmmmmm bolo de murangu melhor bolo do mundo",
        imagem: "https://receitinhas.com.br/wp-content/uploads/2024/04/bolo-de-chocolate-com-morango-2-1200x1200.jpg",
    },
    {
        nome: "Bolo de chocolate",
        valor: 200,
        descricao: "Hmmmmm bolo toooop D+++++",
        imagem: "https://voalzira.com/wp-content/uploads/2020/12/Bolo-de-Festa-de-Chocolate-com-Confete-e-Bis-scaled.jpg",
    },
    {
        nome: "Bolo de cenoura",
        valor: 300,
        descricao: "Hmmmmm bolo tooop muito bom",
        imagem: "https://www.daninoce.com.br/wp-content/uploads/2018/12/bolo-de-cenoura-com-brigadeiro-em-camadas-dani-noce-destaque-1.jpg",
    }
];

app.get('/produtos', (req, res) => {
    res.json(produtos).status(200);
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
