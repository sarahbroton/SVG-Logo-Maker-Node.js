const inquirer = requrie('inquire'); 
const fs = require('fs'); 
const {Square, Triangle, Circle} = require('./lib/shapes')

const questions = [ 
{
    type: "input", 
    name: "text", 
    message: "Choose 1-3 characters for your text.", 
}, {
    type: "input", 
    name: "textColor", 
    message: "Choose your text color.",
}, {
    type: "list", 
    name: "shape", 
    message: "Choose your shape.",
    choices: ["Circle", "Triangle", "Square"], 
}, {
    type: "input", 
    name: "shapeColor", 
    message: "Choose your shape color.",
},
]; 

class Svg{
    consturctor(){
        this.textInput = ''
        this.shapeInput =''
    }
    render(){
        return `<svg version="1.1" xmlns="http://ww.w3.org/2000svg"
        width="300" height="200">${this.shapeInput}${this.textInput}</svg>`
    }
    setTextElement(text,color){
        this.textInput = `<text x="150" y="125" font-size="60"
        text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeInput = shape.render()
    }
     
}

// check for errors in user input
function writeFile(fileName, data) {
    if (answers.text.length >3) {
        console.log("Please enter 1-3 characters"); 
    } else {
        fs.writeFile (fileName, data, function (err)
        if (err){
            return console.log("Your logo has been created"); 
        }); 
    }}

async function init() {
    var svgString = "";
    var svgFile = "logo.svg"; 

    const answers = await inquirer.prompt (questions); 

    chosenText = answers["text"]; 
    chosenTextColor = answers["textColor"]; 
    chosenShapeType = answers.shape; 
    chosenShapeColor = answers["shapeColor"]; 

    let userShape; 
    if (userChosenShape === "Square" || userChosenShape === "square") {
        userShape = new Square();
    } else if (userChosenShape === "Circle" || userChosenShape === "circle") {
        userShape = new Circle();
    } else if (userChosenShape === "Triangle" || userChosenShape === "triangle") {
        userShape = new Circle();
    }

    userShape.setColor(shapeColor); 

    // adding shape and text
    var svg = new Svg(); 
    svg.setTextelmeent(chosenText, chosenTextColor); 
    svg.setShapeElement(userShape); 
    svgString = svg.render (); 

    console.log(svgString); 
    writeFile(svgFile, svgString)
}

init()
