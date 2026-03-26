// Let, const
// Template Literals
const courseName = 'NodeJS'
const Description = `Course name: ${courseName}`
console.log(Description)
// Multi-line String
const lines = `Line 1
line 2
line 3
line 4`
console.log(lines)

// Arrow function
const logger = log => console.log(log)

logger('Message...')

const sum = (a, b) => a + b

console.log(sum(1, 2))

const course = {
    name: 'Javascript Basic!',
    getName: function() {
        return this.name;
    }
}

console.log(course.getName())

const course1 = function(name, price) {
    this.name = name
    this.price = price
}

const JSB = new course1('JSB', 1000)

console.log(JSB)
// Classes
class Course2 {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const php = new Course2('PHP', 1000)
const node = new Course2('NODE', 2000)

console.log(node)
console.log(php)

// Default parameter values
function logger2(log = 'giá trị mặc định') {
    console.log(log)
}

logger2(undefined);
// Destructuring
var array = ['JS', 'PHP', 'RUBY']
for(var i = 0; i < array.length; i++)
{
    console.log(array[i])
}

//cách sử dụng destructuring
var arr = ['react', 'express', 'node']
var [a, b, c] = arr;
console.log(arr)

var courseDEV = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
}

var {name, price, image} = courseDEV
console.log(name, price, image)

//cách lấy ra value mà mình chưa định nghĩa: đặt default value (nếu đã định nghĩa thì lấy value đã được đặt còn chưa thì lấu df value)
var {name, description = 'default value'} = courseDEV
console.log(description)
// Rest parameters
var arr1 = ['312', '314', '313']
var [a, b, ...rest] = arr1
console.log(rest)

var courseDEV1 = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS',
    }
}
var {name: parentName, children: {name: childrenName}} = courseDEV1
console.log(childrenName)
console.log(parentName)
var {name, price, ...rest} = courseDEV1
console.log(rest)

function DisplayInfo(a, ...params) {
    console.log(params)
}

DisplayInfo(1,2,3,4,5,6)

function DisplayInfo1({name, description, ...rest}) {
    console.log(rest)
}

DisplayInfo1({
    name: 'javascript',
    price: 1000,
    description: 'dev dev dev',
})

function DisplayInfo2([a, ...rest]) {
    console.log(rest)
}

DisplayInfo2([1, 2, 3])

// Spread
var arrayCourse1 = ['Java', 'PHP', 'Ruby']
var arrayCourse2 = ['JavaCore', 'PHPCore', 'RubyCore']

var arrayCourse3 = [...arrayCourse2, ...arrayCourse1]
console.log(arrayCourse3)

var obj1 = {
    name: 'Javascript'
}
var obj2 = {
    price: 1000
}
var obj3 = {
    ...obj1,
    ...obj2,
}
console.log(obj3)

var defaultConfig = {
    api: 'https:...',
    apiVersion: 'v1',
    other: 'orther',
}

var exerciseConfig = {
    ...defaultConfig,
    api: 'https:exer...',
}

console.log(exerciseConfig)


var arrCourse = ['JS', 'JAVA', 'C#']
function ShowCourse(...rest) {
    for(var i = 0; i < rest.length; i++)
    {
        console.log(rest[i])
    }
}

ShowCourse(...arrCourse)
// Enhanced object literals


// Tagged template literal
function highlight([First, ...strings], ...values)
{
    return values.reduce(
        (acc, currn) => [...acc, `<span>${currn} </span>`, strings.shift()], [First]
    ).join('')
}

var brand = 'F1';
var courseF1 = 'JSB';
const html = highlight`Học lập trình ${courseF1} tại ${brand} !`;
console.log(html);

// Modules: Import / Export

import logger312 from './logger.js';
import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js';

logger312('Test Message...', TYPE_WARN)