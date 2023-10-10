// 13 Write a program that takes an array containing both truthy and falsy values and
// removes the falsy values using the array methods.

// const arr = [0, "hello", "", 42, false, "world", null, true, undefined];

// const filteredArray = arr.filter(item => !! item);;

// console.log(filteredArray);

// 14. Write a program that takes an array of numbers and returns an array with only the
// unique elements without using the array methods.

// function findUniqueElements(arr) {
//     const uniqueArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (uniqueArray.indexOf(arr[i]) === -1) {
//         uniqueArray.push(arr[i]);
//       }
//     }
  
//     return uniqueArray;
//   }
  
//   const arr = [1, 2, 2, 3, 4, 4, 5];
//   const uniqueElements = findUniqueElements(arr);
//   console.log(uniqueElements); 
  
//   16 Write a program that takes an object and checks if a specific property exists

// const obj = { name: "John", age: 30, city: "New York" };
// const propertyName = 'age';

// if (obj.hasOwnProperty(propertyName)) {
//     console.log(`property '${propertyName}' exists:true`);
// } else {
//     console.log(`property '${propertyName}' exists:false`);
// }

// 17. Write a program that takes an object containing some properties with undefined
// values and removes those properties

// const obj = { name: "John", age: undefined, city: "New York" };

// for (let key in obj) {
//     if (obj[key] === undefined){
//         delete obj[key];
//     }
// }

// console.log(obj);

// 18. Write a program that takes an array containing nested arrays and destructures
// specific elements from the nested arrays

const arr = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];

for (let i = 0; i < arr.length; i++) {
    const [first,second,third] = arr[i];
    
  console.log(`First Element of Nested Array: ${first}`);
//   console.log(`Second Element of Nested Array: ${second}`);
//   console.log(`Third Element of Nested Array: ${third}`);
}

// 19. Write a program that takes an object and extracts properties with renamed variables
// using destructuring assignment.

const user = { name: "John", age: 30 };

const { name: userName, age: userAge } = user;

console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);

// 20. Write a program that takes a function with an object parameter and provides default
// values for missing properties using destructuring assignment.

function displayInfo({ name = "Anonymous", age = 25 }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
  }
  
  const obj = { name: "John" };
  displayInfo(obj);
  