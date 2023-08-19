import fs from 'fs';

/** 
 * callback - é uma função que será executada por outra função, normalmente 
 * uitilizada para controle de fluxos assíncronos. Dessa forma conseguimos preservar 
 * o fluxo do JS, permitindo que a própria linguagem faça o controle de chamadas,
 * impedindo o "travamento" em operações de alta complexidade.
 */

function myCallback(err, content) {
    if (err) return;

    const textFile = content.toString('utf-8');

    try {
        const objectToJson = JSON.parse(textFile);
        console.log(objectToJson);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Sua sintaxe - A função callback recebe uma outra função que é passada como argumento,
 * dessa forma a função que irá receber a outra por parametro fica responsável pela execução
 * do callback. Essa função pode ser uma fn anonima, declaration, expression ou arrow function.
 */
fs.readFile('./myFile.txt', myCallback);

/**
 * A função callback também pode seguir um padrão de estruturação, no caso de callbacks para 
 * métodos nativos do Node, tem-se o padrão de parâmetros. Onde temos dois parâmetros, no qual o
 * primeiro se refere a algum erro que possa ocorrer durante a execução e o segundo é o que 
 * esperamos conseguir.
 */

//===============================================================================================
