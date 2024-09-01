const person = {
    name: 'John',
    age: 30,
    occupation: 'Teacher',
    greet: function(){
        console.log('hello ' + this.name);
    }
}
console.log(person['age'])
person.greet();