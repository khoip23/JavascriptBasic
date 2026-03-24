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
// Rest parameters
// Spread
// Enhanced object literals


// Tagged template literal
// Modules

