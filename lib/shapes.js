class Shape {
    
    constructor(color){
        this.color = color; 
    }

    setColor() {
        this.color = color; 
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`

    }
}

class Square extends Shape {
    render() {
        return `<`
    }
}

class Triangle extends Shape {
    render() {
        return `<`
    }
}

module.exports = { 
    Circle, 
    Square, 
    Triangle 

};