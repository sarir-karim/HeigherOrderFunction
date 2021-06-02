/**
 * Heigher order fucntion in javascript
 */

/*the map method creates new array by calling the callback function provided as an argument on every element
in input array. the map method will take every returned value from the callback fucntion and creates a new array using those value
*/

// Without hiegher order fucntion 

const arr1 = [1,2,3];
const arr2 = []

for(let i = 0; i< arr1.length; i++){
    arr2.push(arr1[i] *2)
}
console.log(arr2)

// with higher order fucntion

const arr1 = [1,2,3];
const arr2 = arr1.map(function(item){
    return item * 2;
});

console.log(arr2)

// with arrow functioin

const arr = [2,3,4];
const ar1 = arr.map(item => item * 3);
console.log(ar1)


// # Example- 2

// find years old 

const birthyear = [2002,2005,1995,1982,1830];
const ages = [];

for(let i = 0; i < birthyear.length; i++){
    let ages  = 2018 - birthyear[i]
    ages.push(ages)
}

console.log(ages);

// with higher order funcion map

const birthyear1 = [2002,2005, 1995,1982,1830];
const ages  = birthyear1.map(year => 2005 - year)
console.log(ages)

//Array filter mehtodd

/**
 * the filter() method creates a new array with all elements that pass the test provided by the  callback fucntion. the callback function passed to the filter() method accepts 3 arguments     element. index, and array
 */

// without higher order function 

const person = [
    {name: 'peter', age: 16},
    {name: 'mark', age: 18},
    {name: 'john', age: 27},
    {name: 'jane', age: 14},
    {name: 'tony', age: 24},
]

const fulllage = [];

for(let i = 0; i< persons.length; i++){
    if(persons[i].age >=18) {
        fulllage.push(persons[i])
    }
}
console.log(fulllage)

// with higher order function

const perion = [
    {name: 'peter', age: 16},
    {name: 'mark', age: 18},
    {name: 'john', age: 27},
    {name: 'jane', age: 14},
    {name: 'tony', age: 24}
]

const fulllage = person.filter(person => person.age >= 18);
console.log(fulllage)

//array.reduce

/**
 * The reduce method executes the callback fucntion on each member of the calling array which array results in a single output value the reduce mehtod accepts two parameter: 1) the reducer fucntion( callback),2) and an optical initial value
 * 
 * the reducer function (callabck) accepts four parameters : accumulator, currentvalue, currentindex source array
 * 
 */

// reduce with higher order fucntion

const arr = [5,4,3,2,1];
const sum = arr.reduce( function(accumulator, currentvalue){
    return accumulator + currentvalue
});// we can also set a initial value for the reduecer fucntion

console.log(sum)

