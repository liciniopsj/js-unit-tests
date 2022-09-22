/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função:
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE - FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!

*/

// PASSO 1: Crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto no seguinte formato: 
//  { fetchMenu: () => objetoPassadoPorParametro }. 
//
// Agora faça o TESTE 4 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 2: Adicione ao objeto retornado por `createMenu()` uma chave de nome `consumption` que, como valor inicial, tem um array vazio.
//
// Agora faça o TESTE 5 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 3: Crie uma função, separada da função `createMenu()`, que, ao receber uma string como parâmetro, 
// adiciona essa string ao array de `objetoRetornado.consumption`. Essa nova função será adicionada à chave `order`.
// 
// DICA PARA DESENVOLVIMENTO: 
// - Definir a função `createMenu()`
// - Definir o objeto que a `createMenu()` retorna, mas separadamente 
// - E depois, definir essa nova função que será atribuída a `order`.
// ```
// const restaurant = {}
//
// const createMenu = (myMenu) => // Lógica que edita o objeto `restaurant`
//
// const orderFromMenu = (request) => // Lógica que adiciona à chave `consumption` de `restaurant` a string recebida no parâmetro `request`. 
// // Essa função deve ser associada à chave `order` de `restaurant`
// ```
// Agora faça o TESTE 6 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 4: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função
// que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.
// const checkOrder = () => {
//   for (let [x, y] of this.consumption) {
//     if (Object.prototype.hasOwnProperty.call(this.menu.food, x)) {

//     }
//   }
// };

// const drinksValueSum = () => {
//   let sum = 0;
//   let drinkNames = Object.keys(this.menu.drinks);
//   let drinkValues = Object.values(this.menu.drinks);
//   for (let index1 = 0; index1 < this.consumption.length; index1 += 1) {
//     for (let index2 = 0; index2 < drinkNames.length; index2 += 1) {
//       if (this.consumption[index1] === drinkNames[index2]) sum += drinkValues[index2];
//     }
//   }
//   return sum;
// };

const createMenu = (myMenu) => {
  let objectResult = {
    menu: myMenu,
    fetchMenu: () => objectResult.menu,
    consumption: [],
    order: (newOrder) => {
      objectResult.consumption.push(newOrder);
    },
    pay: () => {
      const concatObj = Object.assign(objectResult.menu.food, objectResult.menu.drinks);
      let value = 0;
      objectResult.consumption.forEach((order) => {
        for (let [x, y] of Object.entries(concatObj)) {
          if (order === x) value += y;
        }
      });
      return value * 1.1;
    },

  };
  
  return objectResult;
};

const restaurant = createMenu({ food: { coxinha: 3.90, pastel: 2.50 }, drinks: { agua: 3.90, suco: 1.50 } });
console.log(restaurant.fetchMenu());

// function getValueFood(order) {
//   for (let x of this.menu.food)
//   if (order === Object.keys(this.menu.food))
// }

// const restaurant = createMenu({ food: { coxinha: 3.90, pastel: 2.50 }, drinks: { agua: 3.90, suco: 1.50 } });
// restaurant.order('coxinha');
// restaurant.order('coxinha');
// restaurant.order('agua');
// const concatMenu = Object.entries(restaurant.menu.food).concat(Object.entries(restaurant.menu.drinks));
// const concatObj = Object.assign(restaurant.menu.food, restaurant.menu.drinks);

// // console.log(concatObj);
// const testOrder = ['coxinha', 'coxinha', 'suco'];
// // const getValueArry = () => {
// // let resultArry = [];
// let value = 0;
// restaurant.consumption.forEach((order) => {
//   for (let [x, y] of Object.entries(concatObj)) {
//     if (order === x) value += y;
//   }
// });
// console.log(value);
// // for (let [x, y] of Object.entries(concatObj)) {
// //   console.log(y);
// // }

module.exports = createMenu;
// Requisite 10 WiP | restaurant.spec.js 8/8 , restaurant.js 4/4