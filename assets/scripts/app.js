//import myVar from "./util.js";
// import * as myVar from "./util.js";
//
// console.log(myVar.default);
// console.log(myVar.apiKey);
// console.log(myVar.someOther);


// const myVar = 10;
// const myVar = 10
//
// function getSum(a, b = 0) {
//     return a + b;
// }
//
// const sum1 = getSum(10)
// const sum2 = getSum(10, 5)
//
// console.log(sum1)
// console.log(sum2)

//arrow functions

// const arrowFunc = () => {
//     console.log('works')
// }
// const arrowFunc2 = () => console.log('works')
//
// arrowFunc()


//ARRAY
// const array = ['zero', 'one', 'two']
// array.push('three')
//
// console.log(array)
//
// const index = array.findIndex((item) => item === 'two')
//
// console.log(index)
//
// const newArray = array.map((item, i) => item + ' - ' + i)
//
// console.log(newArray)
// console.log(array)// <- not edited!
//
// const jsonArray = array.map(item => ({number: item}))
//
// console.log(jsonArray)

//DESTRUCTOR
// const array = ['zero', 'one', 'two']
//
// const [zeroNumber, oneNumber, threeNumber] = ['zero', 'one', 'two']
//
// console.log(zeroNumber)
// console.log(oneNumber)
// console.log(threeNumber)

// const objArray = {
//     zero: 'zero',
//     two: 'two'
// }
//
// const zeroNumber = objArray.zero
// const twoNumber = objArray.two
//
// console.log(zeroNumber)
// console.log(twoNumber)
//
// const {zero, two} = objArray
//
// console.log(zero)
// console.log(two)

//SPREAD ...

const array = ['zero', 'one', 'two']
const array2 = ['three', 'four']

const joinedArray = [array, array2]
console.log(joinedArray)
const joinedArray2 = [...array, ...array2]
console.log(joinedArray2)

const obj = {
    zero: 'zero',
    one: 'one'
}

const extendedObj = {
    ...obj,
    two: 'two'
}
console.log(extendedObj)

const extendedObj2 = {
    two: 'two',
    ...obj
}
console.log(extendedObj2)











