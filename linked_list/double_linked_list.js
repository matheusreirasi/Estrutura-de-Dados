class DoubleNode {
    constructor(element, prev) {
        this.element = element
        this.next = undefined
        this.prev = prev
    }
}

function defaultEquals (a, b) {
    return a === b //return true or false
}

class DobleLinkedList {
    constructor() {
        this.count = 0
        this.head = undefined
        this.tail = undefined
        this.equalFn = defaultEquals
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) { //tem q ser até "this.count" para poder parar qnd chegar em "undefined"
            let node = this.head //na estrutura de conjunto eu tive que colocar o que vem depois de this. com parênteses no final
            for (let i = 0; i < index && node != null; i++){
                node = node.next
            }
            return node
        } else {
            throw new Error (`Index out of range, must be between 0 and ${this.count-1}.`)
        }
    }

    push(element) {

    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoubleNode(element)
            let current = this.head //this means current start with "undefined" value

            if (index === 0) { //if the element is added at the first index
                if (this.head == undefined) {
                    this.head = node
                    this.tail = node
                } else { //when the first element isn't undefined, it's a number or a string
                    node.next = this.head //node.next(the value added) receives current value and "walks" to right
                    current.prev = node //current.prev is the link to the new value
                    this.head = node
                }
            } else if (index === this.count) {//when the element is added at the end
                current = this.tail//tail it's the last node.next and receives the last value
                current.next = node //last value is linked with the new value
                node.prev = current //node.prev links with the old current value on the list
                this.tail = node //tail is updated and receives the new value
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.count ++
            return true
        }
        throw new Error(`Index out of range, must be between 0 and ${this.count-1}.`)
    }

    indexOf() {
        let current =this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalFn(element, current.element)) {
                return i
            }
        }
    }

    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
                if (this.count === 1) {
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) {
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = current
            }
            this.count --
            return current.element  
        }
        return undefined
    }

    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.size === 0 //return true or false
    }

    clear() {
        this.count = 0
        this.head = undefined
        this.tail = undefined
    }
}



let doubleList = new DobleLinkedList()