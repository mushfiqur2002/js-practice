// Object approach (using this)
let person1 = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Array approach (using map)
let peopleArray = [
    { name: 'John', age: 30 },
    { name: 'Deo', age: 25 }
];

// Object approach (using iteration)
let peopleObject = {
    "person1": { "name": "John", "age": 30 },
    "person2": { "name": "Deo", "age": 25 }
};

// Using Object.values() with forEach
Object.values(peopleObject).forEach(function(person) {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
});