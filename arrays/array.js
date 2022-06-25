let numberList = [0,1,2,3,4,5,6,7,8,9]
numberList.push(10,11,12,13) //adiciona no final
numberList.unshift(-1) //adiciona no começo da lista
numberList.pop() //remove o último elemento da lista, não precisa passar valores dentro do parênteses 
numberList.shift() //remove do começo da lista, não precisa passar valores dentro do parênteses.

console.log(numberList, '\n Aqui mostra o array original.')



//*****Código abaixo remove o primeiro elemento da posição, usado somente para estudos. Em projetos, usar "shift"
for (let i=0; i < numberList.length; i++) {
    numberList[i] = numberList[i+1]
}
Array.prototype.reIndex = function(numberList) {
    const newArray = []
    for (let i=0; i<numberList.length; i++) {
        if (numberList[i] !== undefined){
            newArray.push(numberList[i]) //se eu usar "unshift" a lista fica invertida, começando pelo último valor da lista
        }
    }
    return newArray
}
//"Array.prototype.nomeQualquer" é considerado uma função, porém não altera em nada no código original, somente é alterado o que há dentro dessa função. Para executar essa função, deve-se colocar o nome completo dele e dentro do parênteses o parâmetro que será tratado pela função, nesse caso é "numberList".
Array.prototype.removeFirstPosition = function() {
    for(let i=0; i<this.length; i++){
        this[i] = this[i+1]
    }
    return this.reIndex(this)
}

//*Para remover um elemento de determinada posição no array, usa-se "splice". A sintaxe : Array.splice(index, count, items1, items2). Index é a posição que será removida e count são quantos valores serão removidos a partir de index. "splice" pode ser usado tanto para remover quanto para adicionar, se count for ZERO, então os valores de items1 será usado para inserir valores no array.
console.log(numberList, '\n Aqui já foi removido o último valor do array, e na posição do último valor está agora "undefined".')

numberList.splice(2,1)

console.log(numberList, '\n O resultado final mostra o array sem o número 3(era o valor do index 2 depois de passar pelo for) e sem o último index que constava como "undefined".')
numberList.splice(2,0,3)
console.log(numberList, '\n Aqui é adicionado novamente o valor 3 na posição 2 usando splice. Não sei o por que, mas aqui o último index está como undefined, só fica normal se eu usar prototype')
//*Outro meio de remover um elemento de um array é usando "slice". A sintaxe é: array.slice(startIndex, endIndex)
for (let number of numberList) {
    if (numberList[number] === undefined) {
        numberList.splice(number,1)
    }
}
numberList.unshift(0)
console.log(numberList, '\nUsei o método "for...of" para remover o último valor do index que era undefined. Esse é o melhor método para iterar.')


//**********Array bidimensional *************/
let averageDay1 = [33,33,35,36,37,37,38]
let averageDay2 = [27,27,28,29,30,30,30]
//Javascript não aceita matriz, somente aceita array unidimensional. Mentira.
let totalAverageTemp = []
totalAverageTemp.unshift(averageDay1,averageDay2) //Para mostrar de forma mais bonita essa matriz é só usar "console.table(totalAverageTemp)"

function matrizTemp (totalAverageTemp) {
    for (i=0; i<totalAverageTemp.length; i++){
        for (j=0; j<totalAverageTemp[i].length; j++) {
            console.log(totalAverageTemp[i][j])
        }
    }
}
const explicacaoMatrizTemp = 'Em javascript o funcionamento da matriz é diferente. Em python era só botar a lista de linha que se quer percorrer e depois entrar dentro dessa linha e percorrê-la. Aqui, é necessário colocar todas as listas dentro de uma única lista, depois percorrê-la usando length, após isso, para percorrer as colunas dentro da linha, tem que especificar a posição de i(linha) que será percorrida.'


//**********ITERAÇÃO DE ARRAY ******/
iterador = () => {
    iterator = numberList[Symbol.iterator] ()
    for (const n of iterator) {
        console.log(n,'posição:',{n})
        if (numberList[n+1] === undefined) {
        console.log('Acho que iterar nada mais é que usar um loop para percorrer todos os valores do array. Usando esse método "iterator" ele mostra somente o valor do array, não mostra o index')
        }
    }
}

//Mostra todos os números dentro do array, um embaixo do outro. Não sei o por que, mas aparece no console automaticamente ao carregar o site. "Symbol.iterator" é igual a "@@iterator". Não se pode utilizar "Symbol" como uma propriedade direta, por isso fica entre colchetes.

outroArray = [-1,-2,-3,-4,-5]
Array.prototype.teste = () => {
    for (n=0; n<outroArray.length; n++) {
        console.log(n, 'é o index de',outroArray[n])
    }}


//*********** ENTRIES, KEYS, VALUES */
funcionamentoEntries = () =>{
    numberListEntries = numberList.entries()
    for (const n of numberListEntries) {
        console.log(n)
    }
    console.log('É mostrado o par de chave/valor de cada posição do array. O método ".keys()" retorna somente o "index"  e ".value" retorna somente o valor da posição do array. Entries e a versão completa')
}

//********* MÉTODO FROM */
numberList2 = Array.from(numberList, x => (x%2 === 0 ))

//******** MÉTODO FILL */
let arrayQualquer = Array(6).fill(1)
let numbersCopy = Array.of(1,2,3,4,5,6)
numbersCopy.fill(0)
numbersCopy.fill(1,3,5) //o index de posição 5 não entra na contagem

//********* ORDENANDO ELEMENTOS */
ordenarFalso = () =>  {
    numberList.sort()
    console.log(numberList)
    console.log('É mostrado nessa ordem pq o comando sort, assim como em python considera tudo como string, sendo assim, mostrará tudo que começa com 1 e depois tudo que começa com 2 e assim sucessivamente.')
}

ordenarVerdadeiro =() => {
    numberList.sort((a,b) => a-b)
    console.log(numberList)
}

const pessoas = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25},
    {name: 'Matheus', age: 23}
]

Array.prototype.compararIdades = () => {
    pessoas.sort((a,b) => a.age-b.age)
    console.log(pessoas)
} //Depois de executada essa função, pessoas ficará ordenada pela idade, mesmo se eu der console.log somente no objeto pessoas. Até mesmo usando "Array.prototype" aparece o array já ordenado.

compararNomes = () => {
    pessoas.sort((a,b) => a.name-b.name)
    console.log(pessoas)
} //Esse código não funciona.
