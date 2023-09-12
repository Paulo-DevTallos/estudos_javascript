/**
 * JavaScript não é uma linguagem orientada a objeto, 
 * ela suporta programação orientada a objeto.
 * 
 * Uma factory function (função de fábrica) em JavaScript é uma função que retorna um novo objeto. Ela é chamada de "factory" porque * é usada para criar objetos como se fossem produtos de uma fábrica. Essa abordagem é uma maneira de criar objetos em JavaScript, 
 * proporcionando um meio para encapsular a lógica de criação de objetos e permitindo a reutilização desse processo de criação em  
 * vários lugares do seu código.
 */

/**
 * Imagina que trabalhamos em uma startup de delivery onde a unica forma de transporte é caminhão e então é pedido para criar uma 
 * nova forma de delivery
 * 
 */

// Factory function - trabalham com a utilização de mappers
const FnTruck = () => {
    const delivery = () => {
        console.log('Logica para entregas de caminhão');
    }

    return {
        delivery,
    }
}

const FnCar = () => {
    const delivery = () => {
        console.log('Logica para entregas de carro');
    }

    return {
        delivery,
    }
}

const FnLogistics = () => {
    const TRANSPORTS_MAPPER = {
        truck: FnTruck,
        car: FnCar,
    }

    // type é a referencia da posição do que está sendo repassado para o MAPPER e o executa.
    // é possível realizar uma condicional previa verificando se type existe.
    const fnCreateTransport = (type) => TRANSPORTS_MAPPER[type] ; 

    return {
        fnCreateTransport
    }
}

const callTruck = FnLogistics.fnCreateTransport('truck');
const callCar = FnLogistics.fnCreateTransport('car');

callTruck.delivery();
callCar.delivery();

// Constructor factory - classe utilizada em todos os locais que realizam uma entrega
// utilizando typescript voce pode criar interfaces que criem um contrato com os metodos da classe de transportes
class Truck {
    delivery() {
        console.log('Logica para entregas de caminhão');
    }
}

class Car {
    delivery() {
        console.log('Logica para entregas de carro');
    }
}

class Bicycle {
    delivery() {
        console.log('Logica para entregas de bicicleta');
    }
}

// centraliza logica de entrega e checkout
class Logistics {
    createTransport() {
        if (type === 'truck') return new Truck();
        if (type === 'car') return new Car();
        if (type === 'bicycle') return new Bicycle();
    }
}

// chamada dos metodos para utilização na abordagem atual
const logistics = new Logistics();

const truck = logistics.createTransport('truck');
const car = logistics.createTransport('car');
const bicycle = logistics.createTransport('bicycle');

truck.delivery();
car.delivery();
bicycle.delivery();