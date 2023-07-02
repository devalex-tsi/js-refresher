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

// const array = ['zero', 'one', 'two']
// const array2 = ['three', 'four']
//
// const joinedArray = [array, array2]
// console.log(joinedArray)
// const joinedArray2 = [...array, ...array2]
// console.log(joinedArray2)
//
// const obj = {
//     zero: 'zero',
//     one: 'one'
// }
//
// const extendedObj = {
//     ...obj,
//     two: 'two'
// }
// console.log(extendedObj)
//
// const extendedObj2 = {
//     two: 'two',
//     ...obj
// }
// console.log(extendedObj2)

//FUNCTIONS
// function greeting (){
//     console.log('Hello')
// }
//
// setTimeout(greeting, 2000)
//
// const superGreeting = () => console.log('Hey, how are you doing!')
//
// superGreeting()
//
// function greet(otherFunc){
//     otherFunc();
// }
//
// function greetDelay(otherFunc){
//     setTimeout(otherFunc, 4000)
// }
//
// greet(() => console.log('Hey!'))
// greetDelay(() => console.log('Helloooo!'))
//
// function privateGreeting(){
//     function internalGreet(){
//         console.log('Hello from internal!')
//     }
//
//     internalGreet()
// }
//
// privateGreeting()
//
//
// function familyGreet(familyName){
//     return (name) => console.log('hello '+ name + ' ' + familyName)
// }
//
// const familyFunc = familyGreet('Brin')
//
// familyFunc('Sergey')
// familyFunc('Oleg')

    // map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    // filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
    // concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
    // slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice




