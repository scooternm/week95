// OOP

//intro to classes and instances and methods and properties

//encaspulates variables and functions
class Rectangle{ //defines a new data type called Rectangle
    //factory that makes the instance
    constructor(height, width){
        //me, myself, and I
        //the instance is called by the keyword "this"
        this.height = height;
        this.width = width;
    }

    //method - a function inside a class
    //doesn't need 'function' in front to run
    getArea(){
        return this.height * this.width;
    }
}

//create a new instance and assign it to the r variable
let r = new Rectangle(12,12);
//call/invoke r's inherited getArea() method
console.log(r.width, r.height,r.getArea());

let s = new String();
console.log(s.length);

let t = ""; //new String("")
console.log(t.length);

let n = new Number();
console.log(n, n.toFixed(3));

let m = 0;
console.log(m,m.toFixed(3));