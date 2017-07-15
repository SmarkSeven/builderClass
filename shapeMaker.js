class ShapeMaker {
    constructor () {
        Object.assign(this, ShapeMaker.defaults())
    }
    static defaults () {
        return {
            id: null,
            x: 0,
            y: 0,
            shape: 'square',
            size: 0.5,
            color: 'red',
            strokeColor: 'yellow',
            hidden: false,
            label: null,
            labelOffset: [0, 0],
            labelFont: '10px sans-serif',
            labelColor: 'black'
        }
    }
    newShape (id, x, y) {
        const obj = Object.create(this);
        return Object.assign(obj, {id, x, y})
    }
    setDefault (name, value) {
        this[name] = value;
    }
    getDefault (name) {
        return this[name]
    }
}
