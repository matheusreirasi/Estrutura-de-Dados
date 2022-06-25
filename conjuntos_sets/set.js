class Set {
    constructor() {
        this.items = {}
    }

    has(element) {
        return element in this.items
        //return Object.prototype.hasOwnProperty.call(this.items, element)
        //return this.items.hasOwnProperty(this.items, element)
    }
    /*
    *Talvez o método usando protótipo seja mais rápido pois acho que vai direto *ao element contido em this.items enquanto o primeiro caso percorre todo o *objeto.
    *O último caso não é recomendado pois algumas ferramentas de lint como o *EsLint lança como erro devido ao fato de nem todos os objetos herdarem de *Object.prototype.
    */

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            console.log('Added')
        } else {
            throw 'Already exist'
        }
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            console.log('Deleted')
        } else {
        throw 'Not exist'
        }
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length
    }

    sizeLegacy() {
        let count = 0
        for (let keys in this.items) {
            //if (this.items.hasOwnProperty(keys)) código funcionou sem isso
            count ++
        }
        return count
    }

    values() {
        return Object.values(this.items)
    }

    valuesLegacy() {
        let values = []
        for (let key in this.items) {
            //if (this.items.hasOwnProperty(keys))
            values.push(key)
        }
        return values
    }

    union(otherSet) {
        const unionSet = new Set
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet
    }

    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values() //na estrutura de listas ligadas eu não precisei colocar parênteses

        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    intersectionFast(otherSet) {
        const intersectionFastSet = new Set()
        const values = this.values() //acho que esse this.values é do conjunto principal
        const otherValues = otherSet.values() //esse é do outro passado dentro do parênteses
        let biggerSet = values
        let smallerSet = otherValues
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues
            smallerSet = values
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionFastSet.add(value)
            }
        })
        return intersectionFastSet
    }

    difference(otherSet) {
        const differenceSet = new Set()
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        })
        return differenceSet
    }

    isSubSetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        }
        
        let isSubSet = true
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubSet = false
                return false
            }
            return true
        })
        return isSubSet
    }
}


even = [4,66,44,36]
odd = [1,55,75,33]
evenOdd = [4,66,75,33,1,36,55]

/*
setEven = new Set()
even.forEach(value => setEven.add(value))

setOdd = new Set()
odd.forEach(value => setOdd.add(value))

setEvenOdd = new Set()
evenOdd.forEach(value => setEvenOdd.add(value))
*/

function putDataInSet(data) {
    set = new Set()
    data.forEach(value => set.add(value))
    return set
}