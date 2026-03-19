// npm init - iniciou o projeto
// npm start - execulta o projeto
// npm install express - para usar o express

import express from 'express';

const host = '0.0.0.0';
const porta = 3000;

const server = express(); //oferecendo ao desenvolvedor um servidor http de modo expresso

//recheando o servidor com funcionalidades

server.get('/', (requisicao, resposta) => {
    resposta.send(`
    <DOCTYPE htmk>
    <html lang = "pt-br">
    <head>
        <meta charset = "UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Primeiro programa para internet usando node + express</title>
    </head>
    <body>
        <h1> Primeiro programa para internet usando node + express</h1>
        <h2> Olá, bem-vindo a página inicial</h2>
    </body>
    </html>
    `);
});

server.get('/horaAtual', (requisicao, resposta) => {
    const horaAtual = new Date();
    const hora = horaAtual.getHours() + ":" + horaAtual.getMinutes() + ":" + horaAtual.getSeconds();

    resposta.send(`
        <DOCTYPE htmk>
    <html lang = "pt-br">
    <head>
        <meta charset = "UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Horário do Servidor </title>
    </head>
    <body>
        <h1> Primeiro programa para internet usando node + express</h1>
        <h2> Agora são ${hora}</h2>
    </body>
    </html>
        `);

});

//criar um metodo que aceite parametros

server.get("/tabuada", (requisicao, resposta) => {
    //tabuada de qual numero e ate qual sequencia?
    const numero = parseInt(requisicao.query.numero);
    const sequencia = parseInt(requisicao.query.sequencia);

    if (!numero || !sequencia) {
        resposta.setHeader('Content-Type', 'text/html');
        resposta.send(`
        <DOCTYPE htmk>
    <html lang = "pt-br">
    <head>
        <meta charset = "UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Tabuada </title>
    </head>
    <body>
        <h1> Primeiro programa para internet usando node + express</h1>
        <h2> Por favor, informe o número e a sequência na URL</h2>
        <h3> Exemplo: http://localhost:3000/tabuada?numero=5&sequencia=10 </h3>
    </body>
    </html>
        `);
    }

    else{
        resposta.setHeader('Content-Type', 'text/html');
        resposta.write(`
            <DOCTYPE htmk>
    <html lang = "pt-br">
    <head>
        <meta charset = "UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Tabuada </title>
    </head>
    <body>
        <h1> Primeiro programa para internet usando node + express</h1>
        <h2> Tabuada do ${numero} até a sequência ${sequencia}</h2>
        <ul>
            `);

        for(let i = 0; i < sequencia; i++){
            resposta.write(`
                <li> ${numero} x ${i} = ${numero * i}</li>
                `);
        }

        resposta.write(`
            </ul>
            </body>
    </html>
            `);


    }
    resposta.end();

});


server.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`);

});