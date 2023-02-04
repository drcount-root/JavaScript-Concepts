// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

// Return value : A new object with the specified prototype object and properties.

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

// const me = new Object(person);

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();

// "My name is Matthew. Am I human? true"
