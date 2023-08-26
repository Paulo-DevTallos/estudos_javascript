/**
 * Valores primitivos são repassados através de valores
 * e objetos são repassados por referencias
 * 
 * Imagine que temos a memória do dispositivo e suponha que em um espaço 
 * da memória foi criado um objeto1 e um objeto2, então vocepassou para o 
 * objeto2 para o objeto1. Ao fazer isso automaticamente os dois objetos
 * passam a ocupar o mesmo espaço na memória, então se realizarmos uma 
 * alteração no objeto1 o dois sofrerá alteração e vice e versa.
 * 
 * Para os exemplos a seguir é importante a leitura e compreensão para verificação
 * de seus exemplos aplicados aos logs. Recomendo que ao estudar esse tópico procure
 * práticar com seu próprio entendimento de forma a ter melhor proveito na absorção
 * do aprendizado.
 * 
 * Em caso de dúvidas abra uma Issue para criar um forum de discussão nesse repo.
 * 
 */

// atribuindo nome a teste
let teste = 'Nome';

// atribuindo teste a teste1
let teste1 = teste;

// reatribuindo o Outro nome a teste
teste = 'Outro nome!';

console.log(teste) // Aqui será impresso Outro nome (reatribuição)
console.log(teste1) // Aqui será impresso Nome

//=====================================================================================================================
// criando objeto1
let objeto1 = { name: 'Paulo' };

// atribuindo objeto1 para objeto2
let objeto2 = objeto1;

// alterando objeto2 para 'Joao'
objeto2.name = 'João';

// realizando atribuição por cópia, nesse caso não ocorre a alteração do objeto original
let objeto3 = { name: 'Ferreira' };
let objeto4 = {...objeto3};
objeto4.name = 'Luiz';

// os dois passarão a receber o mesmo valor pois passam a fazer referencia ao mesmo lugar na memória.
console.log(objeto1); 
console.log(objeto2);

// cria uma cópia do objeto apontando para lugares direfentes na memória.
console.log(objeto3);
console.log(objeto4);

/** Acessar referencia sob nível de profundidade de objetos */
// utilizar JSON para essa tratativa
let objeto5 = { item: 'Xicara', caracteristicas: { cor: 'branca', material: 'louça' } };
let objeto6 = { ...objeto5 };
objeto6.item = 'Colher'; 
/**
 * Ao alterar uma propriedade a partir do primeiro estágio da cópia do objeto 
 * essa alteração terá efeito da mesma forma como no exemplo do console do "objeto4".
 **/   
objeto6.caracteristicas.material = 'Metal';
/**
 * Nesse caso ao realizarmos uma alteração em um nível de profundidade dentro do objeto
 * o essa alteração é replicada para todas as declaração desse mesmo objeto, desde o 
 * objeto copiado até o original, recebendo assim o novo valor atribuído.
 **/

let objeto7 = JSON.parse(JSON.stringify(objeto6))
objeto7.caracteristicas.material = 'Plastico';
/**
 * Aplicando o JSON.parser(JSON.stringify(obj)) criamos uma cópia mais profunda do objeto
 * isso é necessário para garantir que não haja referências compartilhadas entre os objetos 
 * originais e copiados. Isso significa que as alterações feitas em um objeto não afetarão o 
 * outro objeto. No entanto essa abordagem tem algumas limitações, como não ser capaz de copiar 
 * funções, propriedades não-enumeráveis e objetos com referências circulares. Com isso o valor 
 * atribuído para a alteração realizada em 'objeto7.caracteristicas.material' alterará apenas 
 * o valor concernente a variável objeto7.
 * 
 */

console.log(objeto5);
console.log(objeto6);
console.log(objeto7);

//=====================================================================================================================
// analisando a mesma abordagem para arrays
// atribuindo valores para o myArray;
let myArray = [1, 2, 3, 4];

// atribuindo myArray para arr1
let arr1 = myArray;

// reatribuindo o valor 'Paulo' para o arr1
arr1[1] = 'Paulo';

// criando arr2
let arr2 = [5, 6, 7, 8, 9];

arr3 = [...arr2];

arr3[1] = 'Jon Snow';

/**
 * Para esse caso simulamos uma ocorrência semelhante a tratada com os objetos. Nesse caso precisamos realizar 
 * uma alteração um nível a mais em nosso array. Para isso criamos uma cópia atribuído a variável 'arr5' e 
 * analisamos alguns comportamentos.
 * 
 */
let arr4 = [1, 2, 3, [4, 5]];
let arr5 = [...arr4];
arr5[3].push(6) 
/**
 * ao adicionar o '6' para a cópia atribuída ao arr5 no indice [3] observamos que seu valor e replicado para o array
 * original, da mesma forma como ocorre com o objeto. Para realizar a alteração sem mutar o array original utilizamos
 * a mesma abordagem de parsear o seu valor de forma que consigamos acessar apenas o valor um nível a dentro do array
 * alterando apenas os dados atribuídos àquela estrutura.
 */
let arr6 = JSON.parse(JSON.stringify(arr5))
arr6[3].push(7);

// nesse caso o valor dos dois arrays são alterados, pois assim como no objeto os valores são transmitidos por ref.
console.log(myArray);
console.log(arr1);
// criada uma copia do array apontando para lugares diferentes na memoria
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

/**
 * Essas abordagens são bastante utilizadas quando precisamos alterar valores de variaveis
 * e principalmente de arrays e objetos sem quebrar um princípio do JavaScript que é a 
 * imutabilidade, nesse caso recomenda-se criar uma cópia do recurso para que se possa
 * tratar seus dados.
 * 
 */

//=====================================================================================================================
//exemplos com funções
function testeFn() {
    console.log('alguma coisa');
};

let fn = testeFn; // essa abordagem significa que estamos passando uma função por referencia, nesse caso ela não é executada"()"

function fn1(fn) {
    fn();
};

/**
 * nesse estamos referenciando a função teste como parametro de fn1, caso 
 * repassassemos teste() estariamos executando a função e não referenciando
 */
console.log(fn1(testeFn)); 
