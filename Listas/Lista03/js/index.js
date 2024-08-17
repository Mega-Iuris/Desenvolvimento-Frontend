const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());

let database = []; 

app.post('/cadastrar-usuario', (req, res) => {
    const { nome, email, senha, confirmacaoSenha } = req.body;

    const emailEncontrado = database.find(usuario => usuario.email === email);
    if (emailEncontrado) {
        return res.status(400).json({ mensagem: 'Email já está sendo utilizado' });
    }

    if (senha !== confirmacaoSenha) {
        return res.status(400).json({ mensagem: 'As senhas devem ser iguais' });
    }

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    };
    
    database.push(usuario);
    return res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!' });
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const usuarioEncontrado = database.find(usuario => usuario.email === email);
    if (!usuarioEncontrado) {
        return res.status(400).json({ mensagem: 'Usuário ou senha inválido' });
    }

    if (usuarioEncontrado.senha !== senha) {
        return res.status(400).json({ mensagem: 'Usuário ou senha inválido' });
    }

    return res.status(200).json({ mensagem: 'Login bem sucedido' });
});

app.get('/buscar-todos-usuario', (req, res) => {
    return res.status(200).json(database);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
