class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }

    dequeue() {
        if (this.items === 0) {
            return undefined
        } else {
            const result = this.items[this.lowestCount]
            delete this.items[this.lowestCount]
            this.lowestCount++
            return result
        }
    }

    peek() {
        if (this.items === 0) {
            return undefined
        } else {
            return this.items[this.lowestCount]
        }
    }

    size() {
        return this.count - this.lowestCount
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
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

function hotPotato(elementList, num) {
    const queue = new Queue()
    const eliminatedList = []
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i])
    }

    while (queue.size > 1) {
        for (let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminatedList.push(queue.dequeue)
    }

    return {
        eliminated : eliminatedList,
        winner: queue.dequeue()
    }
}

lista = new Queue()

const names = ['João','Matheus','Julia','Carla','Camila','Carl']
const game = hotPotato(names,8)
game.eliminated.forEach(names => {
    console.log(`${names} was eliminated`)
})
console.log(`The winner is: ${game.winner}`)