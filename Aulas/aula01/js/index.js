const http = require('http')
const port = 5000

const produtos = [
  {
    nome: "Bolu morangu",
    valor: 1000000,
    imagem:
      "https://s2-receitas.glbimg.com/NuaHNlXg5Z24maYBjcOPERViG0E=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/f/f/DLO9veTbiW41gbCjujVQ/bolo-de-morango-com-chantilly-receita.jpg",
  },
  {
    nome: "Bolu de chocolate",
    valor: 3000,
    imagem:
      "https://www.estadao.com.br/resizer/v2/FIVYQFU6J5ND3PYRA6XQHR4NW4.jpg?quality=80&auth=04a93b8f4c288302da64fd8a96da7bb7cc11dff70430e4ba66587218d5b6011f&width=720&height=503&focal=0,0",
  },
];

const requestHandler = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.write(JSON.stringify(produtos));
  return res.end();
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log('Servidor rodando na porta 5000');
})
