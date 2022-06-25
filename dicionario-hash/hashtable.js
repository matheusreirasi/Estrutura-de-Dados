/*
function defaultToString (item) {
    if (item === "null"){
        return "NULL"
    } else if (item === "undefined") {
        return "UNDEFINED"
    } else if (typeof item === "string" || item instanceof String)  {
        return `${item}`
    }
    return item.toString()
}

class ValuePair {
    constructor(key,value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `[#${this.key}:${this.value}]`
    }
}
*/

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    hashCodeNumber(key) {
        if (typeof key === "number") {
            return key
        }
        const keyString = this.toStrFn(key)
        let sumOfString = 0
        for (let i =0; i < keyString.length; i++) {
            sumOfString += keyString.charCodeAt(i)
        }
        return sumOfString % 37
    }

    hashCode(key) {
        return this.hashCodeNumber(key)
    }

    put(key,value) {
        if (key != null || value != null) {
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key,value)
            return true
        }
        return false
    }

    get(key) {
        const valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    remove (key) {
        const position = this.hashCode(key)
        const valuePair = this.table[position]
        if (valuePair != null) {
            delete this.table[position]
            return true
        }
        return false
    }

    size() {
        return Object.keys(this.table).length
    }

    isEmpty() {
        return this.size() === 0
    }

    toString () {
        if (this.isEmpty()) {
            return ''
        }
        const keys = Object.keys(this.table)
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
        for (let i = 1; i<keys.length; i++) {
            objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return objString
    }
}

hash = new HashTable()