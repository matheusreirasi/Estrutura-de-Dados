const items = new WeakMap()

class privateStack {
    constructor() {
        items.set(this, [])
    }

    push(element) {
        const s = items.get(this)
        s.push(element)
    }

    pop() {
        const m = items.get(this)
        const n = m.pop()
        return n
    }

    peek() {
        const r = items.get(this)
        if (r === 0) {
            return undefined
        } else {
            const s = r[r.length - 1]
            return s
        }
    }

    size() {
        const m = items.get(this)
        if (m === 0) {
            return undefined
        } else {
            const n = m.length
            return n
        }
    }
}

