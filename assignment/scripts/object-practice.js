console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Lisa',
  lastName: 'Donohoo',
  hasSiblings: true,
  //infer/assume shoeCount counts PAIRS of shoes from question #4
  shoeCount: 24, 
  favThreeFoods : ['curry', 'pizza', 'stir fry']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName;
console.log(`My full name is ${fullName}`);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
// use dynamic index in case array length changes...
let index = me.favThreeFoods.length - 1;
console.log(`These are my favorite foods: ${me.favThreeFoods}`);
console.log(`My first favorite food is ${me.favThreeFoods[0]}!`);
console.log(`My last favorite food is ${me.favThreeFoods[index]}!`);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(`My shoe count is ${me.shoeCount}.`);
console.log('...adding one pair of shoes...');
me.shoeCount ++;  //add one pair of shoes
console.log(`My shoe count is now ${me.shoeCount}`);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'green';
console.log(`My favorite color is ${me.favoriteColor}`);
console.log('About me object again:', me);