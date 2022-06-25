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


class Dictionary {
    constructor (toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    hasKey(key) {
        //return this.table[this.toStrFn(key)] != null
        return this.toStrFn(key) in this.table
    }

    set(key,value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key,value)
            return true
        }
        return false
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }

    get(key) {
        const ValuePair = this.table[this.toStrFn(key)]
        return ValuePair == null ? undefined : ValuePair.value
    }

    /*
    get (key) {
        if (this.hasKey(key)) {
            return this.table[this.toStrFn(key)]
        }
        return undefined
    }
    A primeira versão tem menos necessidade de processamento
    */

    keyValue() {
        return Object.values(this.table)
        //esse método seria o mesmo que digitar: "dicionario = new Dictionary  
        //dicionario.table
        //porém o método keyValue é mais bonito e ainda mostra quantos key/value existem
        // Object.values é próprio do javascript
    }

    keys() {
        return this.keyValue().map(valuePair => valuePair.key)
        //método map() retorna já como string
    }

    values() {
        return this.keyValue().map(valuePair => valuePair.value)
    }

    size() {
        return Object.keys(this.table).length
    }

    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this.table = {}
    }

    toString () {
        if (this.isEmpty()) {
            return ''
        }
        const valuePairs = this.keyValue
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString
    }
}
