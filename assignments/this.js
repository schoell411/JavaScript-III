/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding - This will apply if there are not other rules set. With window binding, the 'this' keyword would select the window (or global) object

* 2. Implicit Binding - Implicit binding is an automatic binding. It results from the automatic binding of a property to the object it is inside of. Using this.property within an object would select said property within that object.

* 3. New Binding - New binding is a type of explicit binding, in which we create a new object using the 'new' technique, and the 'this' keyword pointing to it afterwards.

* 4. Explicit Binding - Explicit binding is the result of explicitly telling the JavaScript engine to apply the 'this' keyword to a desired value with the use of call, bind, or apply techniques. 
*
* write out a code example of each explanation above
*/

// Principle 1 -
// code example for Window Binding
function windowBind(){
    console.log(this);
}

// Principle 2 -
// code example for Implicit Binding
const implicitBind = {
    name: 'Kevin',
    last_name: 'Schoell',
    type_name: function(){
        console.log(this.name + ' ' + this.last_name)
    }
}
implicitBind.type_name();

// Principle 3 -
// code example for New Binding
function dog(breed, sex, size){
    this.breed = breed;
    this.sex = sex;
    this.size = size;
}
dog1 = new dog('Great Dane', 'male', 'large');

console.log(dog1.breed);
  
// Principle 4 -
// code example for Explicit Binding
function costume(){
    console.log(this.type);
}
let myCostume = {
    gender: 'male',
    type: 'vampire'
}
costume.call(myCostume);