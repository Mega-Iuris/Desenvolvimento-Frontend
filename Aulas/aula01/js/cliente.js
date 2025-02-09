let conteudoDIV = document.getElementById("conteudo");

fetch('http://localhost:5000', {
    method: "GET"
})
    .then(resposta => resposta.json())
    .then(produtos => {
        for(produto of produtos){
            let paragrafo = document.createElement("p");
            paragrafo.textContent = produto.nome;
            conteudoDIV.appendChild(paragrafo);
            
            let valor = document.createElement("span");
            valor.textContent = produto.valor;
            conteudoDIV.appendChild(valor);
            
            let imagem = document.createElement("img");
            imagem.src = produto.imagem;
            conteudoDIV.appendChild(imagem);
        }
})
