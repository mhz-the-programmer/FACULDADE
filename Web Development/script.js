/*console.log('Hello World');
console.info('Info');
console.warn('Warning');
console.error('Error');
console.table([
    {id: 1, tarefa: 'Estudar JS'},
    {id: 2, tarefa: 'Praticar código'}
])
console.group('Grupo de logs');
console.log('log 1');
console.log('log 2');
console.groupEnd();

console.time('Timer');
//...algum processamento
console.timeEnd('Timer');


comentario para varias linhas


var antigo = ('Forma antiga de declarar variavel');
let variavelMutavel = ('Variavel que pode ser mudada');
const variavelImutavel = ('Variavel que nao pode ser mudada');

//variavelImutavel = 1;
console.log(variavelImutavel);

variavelMutavel = 1;
console.log(variavelMutavel);
*/


//Tipos de dados primitivos
/*
let texto = 'texto'
console.log(typeof texto)

let numero = 0
console.log(typeof numero)

let isCompleted = false
console.log(typeof isCompleted)

let semValor
console.log(typeof semValor)

let nulo = null
console.log(typeof nulo)

let uniqueID = Symbol('id')
console.log(typeof uniqueID)

let bigNumero = 9999999999n
console.log(typeof bigNumero)
*/

//Tipos de dados complexos

let tarefa = [
    {id: 1, tarefa: 'Estudar JS'},
]
console.log(tarefa)
console.log(tarefa.id)
console.log(tarefa.tarefa)

let tarefas = [
    {id: 1, tarefa: 'Estudar JS'},
    {id: 2, tarefa: 'Praticar código'}

]
console.log(tarefas)
console.log(tarefas[0])
console.log(tarefas[0]['id'])

let hoje = new Date()
console.log(hoje)

let pattern = /^[a-z]+$/i;
console.log(pattern)
