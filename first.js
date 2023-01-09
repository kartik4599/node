// const fruits = ["apple", "oranges", "", "mango", "", "lemon"];

// const transformArray = fruits.map((e, i) => {
//   if (e.length===0) {
//     return "empty string";
//   }
//   return e;
// });
// console.log(transformArray);

const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}