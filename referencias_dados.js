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
 */

// atribuindo nome a teste
let teste = 'Nome';

// atribuindo teste a teste1
let teste1 = teste;

// reatribuindo o Fofolette a teste
teste = 'Fofolette!';

console.log(teste) // Aqui será impresso Fofolette (reatribuição)
console.log(teste1) // Aqui será impresso Nome

//=====================================================================================================================
// criando objeto1
let objeto1 = { name: 'Paulo' };

// atribuindo objeto1 para objeto2
let objeto2 = objeto1;

// alterando objeto2 para 'Joao'
objeto2.name = 'João';

// realizando atribuição por referencia nesse caso não ocorre a alteração do objeto original
let objeto3 = { name: 'Ferreira' };
let objeto4 = {...objeto3};
objeto4.name = 'Luiz';

// os dois passarão a receber o mesmo valor pois passam a fazer referencia ao mesmo lugar na memória.
console.log(objeto1); 
console.log(objeto2);

// cria uma cópia do objeto apontando para lugares direfentes na memória.
console.log(objeto3);
console.log(objeto4);

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

// nesse caso o valor dos dois arrays são alterados, pois assim como no objeto os valores são transmitidos por ref.
console.log(myArray);
console.log(arr1);
// criada uma copia do array apontando para lugares diferentes na memoria
console.log(arr2);
console.log(arr3);

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
    console.log('alguma coisa')
};

let fn = testeFn; // essa abordagem significa que estamos passando uma função por referencia, nesse caso ela não é executada"()"

function fn1(fn) {
    fn()
}

/**
 * nesse estamos referenciando a função teste como parametro de fn1, caso 
 * repassassemos teste() estariamos executando a função e não referenciando
 */
console.log(fn1(testeFn)); 
