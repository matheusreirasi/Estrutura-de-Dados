class stackObject {
    constructor() {
        this._count = 0
        this._items = {}
    }

    push(element) {
        this.items[this.count] = element //"this.items" é chave e "element" é valor
        this.count ++
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count === 0 //retorna valores em boolean(true ou false)
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        } else {
            this.count --
            const result = this.items[this.count]
            delete this.items[this.count] //não pude substituir isso por result
            return result
        }
    }

    peek() {
        if (this.count === 0) {
        return undefined
        } else {
        this.count --
        return this.items[this.count]
        }
    }

    clear () {
        this.items = {}
        this.count = 0
    }

    toString() {
        if (this.count === 0){
            return undefined
        }
        let objString = `${this.items[0]}`
        for (let i=1; i < this.count; i++) { //tenho que colocar, obrigatoriamente, o "let i="
            objString = `${objString},${this.items[i]}` //não consegui pensar outro jeito de fazer isso
        }
        return objString
    }

}

const pilha = new stackObject()
console.log(Object.getOwnPropertyNames(stackObject))