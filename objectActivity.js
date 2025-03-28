/*
BELEN, Mariane I.
BSCS 1B
MIDTERM EXAM - DSA
objectActivity.js
*/

//create object called car and put the given properties
let car = {
    type: "SUVs", //put type of car
    model: "Honda", //put model of car
    color: "Black" //put the color of car
};

//use typeof to check the type of and log it
console.log(typeof car);

//update the type property to "Toyota" 
car.type = "Toyota";
console.log(car);

//add new property 
car.wheels = 4;
console.log(car)