class Deque {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    addFront(element) {
        if (this.items === 0) {
            this.items[this.count] = element
            this.count ++
        } else if (this.lowestCount > 0) {
            this.lowestCount --
            this.items[this.lowestCount] = element //quando não se tem o index 0 e é adicionado um novo elemento no começo da fila, o index antecedente ao primeiro valor existente atual é adicionado. Por exemplo, se o objeto começa no index 2 e eu usar o comando "addFront", é criado o index 1 e o element passado como parâmetro ocupa esse index 1.
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i-1] //nesse terceiro caso é quando "lowestCount" é 0.
            }
        }
        this.count ++
        this.lowestCount = 0
        this.items[0] = element
    }

    addBack(element) {
        if (this.items === 0) {
            this.items[this.count] = element
            this.count ++
        } else {
            this.items[this.count] = element
            this.count ++
        }
    }

    removeFront () {
        if (this.items === 0) {
            return undefined
        } else {
            const result = this.items[this.lowestCount]
            delete this.items[this.lowestCount]
            this.lowestCount ++
            return result //assim é retornado oq foi removido
        }
    }

    removeBack () {
        if (this.items === 0) {
            return undefined
        } else {
            const result = this.items[this.count-1]
            delete this.items[this.count-1]
            this.count --
            return result //assim  é retornado oq foi removido
        }
    }

    peekFront() {
        if (this.items === 0) {
            return console.log('Vazio')
        } else {
            return this.items[this.lowestCount]
        }
    }

    peekBack() {
        if (this.items === 0) {
            return console.log('Vazio')
        } else {
            return this.items[this.count-1]
        }
    }

    isEmpty() {
        return this.items === 0 ? true : false
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }

        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}



function palindromeChecker(aString) {
    if (aString === undefined || aString === null || (aString!==null && aString.length === 0)) {
        return false
    }

    const deque = new Deque
    const lowerString = aString.toLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar, lastChar
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString[i])
    }

    while (deque.size > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack
        if (firstChar !== lastChar) {
            isEqual = false
        }
    }
    return isEqual
}