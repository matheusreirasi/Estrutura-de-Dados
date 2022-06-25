//*****OLHAR SITE EM HTML CONTENDO AS EXPLICAÇÕES */

class stackArray {
    constructor() {
        this.items = []
    }

    push (element) {
        this.items.push(element)
    }

    pop () {
        return this.items.pop()
    }

    peek () {
        return this.items[this.items.length-1] //como começa do index 0, pegará o tamanho do array e subtrai com 1, resultando no valor do último index.
    }
    
    isEmpty () {
        return this.items.length === 0 //se for 0, retornará "true"
    }

    size () {
        return this.items.length //retorna o tamanho da pilha
    }

    clear () {
        this.items = [] //outro método é usar pop até que a pilha fosse completamente apagada
    }
}

const stack = new stackArray()