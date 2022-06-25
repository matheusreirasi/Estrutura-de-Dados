//import { Node } from "../../models/node.js"
//import { defaultEquals } from "../../models/util.js"

/*
Tanto tempo sem fazer isso porque eu não coloquei a extensão do arquivo no path do import
*/


class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }

    toString() {
        return `${this.key}`
    }
}


function defaultEquals (a, b) {
    return a === b
}


class LinkedList {
    constructor() {
        this.count = 0
        this.head = undefined
        this.equalsFn = defaultEquals
    }

    push(element) {
        const node = new Node(element)
        let current // declarado como variável global
        if (this.head == null) { //ou undefined
            this.head = node
        } else {
            current = this.head
            while (current.next != null) { //ou seja, enquanto houver um valor
                current = current.next //o valor atual recebe o próximo valor
            }
            current.next = node
        }
        this.count++
    }


    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0 ) {
                this.head = current.next 
            } else {
                let previous
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next //isso faz com que o valor do index passado seja "pulado"
            }
            this.count--
            return current.element
        } else {
            throw new Error (`Index out of range, must be between 0 and ${this.count-1}.`)
        }
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) { //tem q ser até "this.count" para poder parar qnd chegar em "undefined"
            let node = this.head
            for (let i = 0; i < index && node != null; i++){
                node = node.next
            }
            return node
        } else {
            throw new Error (`Index out of range, must be between 0 and ${this.count-1}.`)
        }
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count){
            const node = new Node(element)
            if (index === 0) {
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const previous = this.getElementAt(index-1) //essa função já mostra certinho a posição do index, por isso o menos 1, para colocar na posição antes da indicada dentro do "insert"
                const current = previous.next
                node.next = current
                previous.next = node //node recebe o "element" colocado antes do index antigo
            }
            this.count++
            return true
        } else {
            throw new Error (`Index out of range, must be between 0 and ${this.count-1}.`)
        }
    }

    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i
            }
            current = current.next
        }
        throw new Error (`There is no element ${element} in the list.`)
    }

    remove(element) { //remove o primeiro element encontrado na lista
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.size === 0
    }

    clear() {
        this.count =0
        this.head = undefined
    }

    toString() {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 0; i < this.count && current != null; i++){
            objString = `${objString}, ${current.element}`
            current = current.next
        }
        return objString
    }
}


const list = new LinkedList()



const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare (a, b) {
    if (a === b) {
        return 0
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class SortedLinkedList extends LinkedList {
    constructor (equalFn = defaultEquals, compareFn = defaultCompare) {
        super(equalFn)
        this.compareFn = compareFn
    }

    insert(element, index = 0) { //eu não passo o index, pois no tratamento da função ele irá procurar seu lugar na ordem automaticamente
        if (this.isEmpty()) {
            return super.insert(element, 0)
        }
        const pos = this.getIndexNextSortedElement(element)
        return super.insert(element, pos)
    }

    getIndexNextSortedElement(element) {
        let current = this.head
        let i = 0
        for (;i < this.count && current; i++) {
            const comp = this.compareFn(element, current.element)
            if (comp === Compare.LESS_THAN) {
                return i
            }
            current = current.next
        }
        return i
    }
}

sortedList = new SortedLinkedList()