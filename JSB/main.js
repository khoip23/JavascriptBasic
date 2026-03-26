// alert('Hi Khoi 312');

//khai báo biến
// var fullName = 'Dang Ngoc Son';
// var age = 24;
//alert(fullName);
//alert(age);

//Thuật ngữ built-in
/*
    1. alert
    2. console
    3. confirm
    4. prompt
    5. set timeout
    6. set interval
*/

//dùng để in ra
//console.log('đây là 1 dòng log');
//console.log(age);
//dùng in ra cảnh báo warning
//console.warn(fullName);
//dùng để in ra thông báo lỗi
//console.error(fullName);

//dùng để hiển thị hộp thoại xác nhận
//confirm('xác nhận độ tuổi');
//hiển thị hộp thoại nhập giá trị
//prompt('Xác nhận độ tuổi');
//set thời gian để chạy func
// setTimeout(function() {
//     alert('thong bao')
// }, 1000)

//dùng tương tự setTimeout nhưng khác là lặp lại sau 1 khoảng time
// setInterval(function() {
//     console.log('thong bao khac')
// }, 1000)

/**
    toán tử trong js
    1. tt số học
    2. tt gán
    3. tt so sánh
    4. tt logic
 */
//var a = 1 + 2;
//console.log(a);
//var fullname = 'khoi';

/*
    toán tử nối chuỗi
*/
// var firstName = 'pham';
// var lastName = 'Khoi';

// console.log(firstName + ' ' + lastName);
// firstName += ' hong';
// console.log(firstName + ' ' + lastName);

// function showDialog()
// {
//     //alert('Hi pro');
// }
// showDialog();

// let fullName1 = 'Khoi 1312123123';
// document.writeln(fullName1);

// function writeLog(message)
// {
//     console.log(message);
// }
// writeLog('dong code khac');

// function writeLog1(){
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `

//     }
//     console.log(myString)
// }
// writeLog1('log 1', 'log 2', 'log 3' ,'log 4');

// let ExpressionFunc = function testExpressFunc() {
//     console.log('ExpressFunc')
// }

// var myObject = {
//     myFunc : function testExpressFunc1() {

//     }
// }

// ExpressionFunc();


//Polyfill


//includes method
// let abc = 'abc method 312 abc';
// console.log(abc.includes('method'))
// console.log(abc.includes('method', 5))

// var emailKey = 'email'

// let myObject1 = {
//     name : 'khoi',
//     age : 23,
//     [emailKey] : 'khoi312@gmail.com'
// }

// console.log(myObject1)

// myObject1.school = '312';

//console.log(myObject1.school)

//delete myObject1.age;

//console.log(myObject1)

//object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

let admin = new User('khoi', 'pham', 'avatar');
let user1 = new User('khoiuser', 'phamuser', 'avatar');

console.log(admin)
console.log(user1)

admin.title = 'tự học lập trình'

console.log(admin)

User.prototype.ClassName = 'F8'
User.prototype.GetClassName = function () {
    return this.ClassName;
}

console.log(admin.ClassName)
console.log(admin.GetClassName())

User.prototype.num1 = 3;
User.prototype.num2 = 50;
User.prototype.toSum = function () {
    return this.num1 + this.num2;
}

console.log(admin.toSum())

//Date object
let date = new Date(); //object

let date1 = Date(); //chuỗi

console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDay() + 1)

let day = date.getDay() + 1
let month = date.getMonth() + 1
let year = date.getFullYear()

console.log(`${day} / ${month} / ${year}`)

let courses = [
    {
        id: 1,
        name: 'Khoa hoc: abc',
        price: 100,
        coinText: 'Gia: 100'
    },
    {
        id: 2,
        name: 'Khoa hoc: bcd',
        price: 111,
        coinText: 'Gia: 111'
    },
    {
        id: 3,
        name: 'Khoa hoc: qwert',
        price: 222,
        coinText: 'Gia: 222'
    },
    {
        id: 4,
        name: 'Khoa hoc: 312abc',
        price: 333,
        coinText: 'Gia: 333'
    }
];

//forEach
courses.forEach(function (course, index) {
    console.log(index, course);
})
//every (kiểm tra các phần tử phải thỏa mãn điều kiện gì đó)
let isFree = courses.every(function (course, index) {
    return course.price === 0;
})

console.log(isFree)

//some (chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện)
let isNotFree = courses.some(function (course, index) {
    //console.log(index)
    return course.price === 111
})

console.log(isNotFree)

//find (tìm kiểm phần tử, tìm thấy là kết thúc luôn, không có trả undefine)
let isFind = courses.find(function (course) {
    return course.name === '312abc'
})

console.log(isFind)

//filter
let isFillter = courses.filter(function (course) {
    return course.price === 111
})

console.log(isFillter)

//map
let newCourses = courses.map(function (course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        price: course.price,
        coinText: course.coinText,
        index: index
    }
});

console.log(newCourses)

function CoursesHandle(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        price: course.price,
        coinText: course.coinText,
        index: index
    }
}

let newCourses1 = courses.map(CoursesHandle);
console.log(newCourses1)

//reduce
//accumulator : biến lưu trữ
//currentValue : giá trị hiện tại
function CoinHandle(accumulator, currentValue) {
    return accumulator + currentValue.price;
}

let totalCoin = courses.reduce(CoinHandle, 0);
console.log(totalCoin)

//cách #
let totalPrice = courses.reduce(function (course, priceCourse) {
    return course + priceCourse.price;
}, 0)
console.log(totalPrice)

//cách ES6
let totalPriceES6 = courses.reduce((a, b) => a + b.price, 0)

console.log(totalPriceES6)

let deptArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

let FlatDept = deptArray.reduce(function (number, item) {
    return number.concat(item);
}, [])
console.log(FlatDept)

let topics = [
    {
        topic: "FE",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JS"
            }
        ]
    },
    {
        topic: "BE",
        courses: [
            {
                id: 3,
                title: "PHP"
            },
            {
                id: 4,
                title: "NODEJS"
            }
        ]
    }
]

let FlatTopics = topics.reduce(function (topic, item) {
    return topic.concat(item.courses)
}, [])

console.log(FlatTopics)

//includes method

let cous1 = ['JS', 'PHP', 'C']
console.log(cous1.includes('PHP', 1))

//Callback

function myFunction(param) {
    param('Học lập trình');
}

function myCallback(value) {
    console.log('value: ', value);
}

myFunction(myCallback);

function test1(item) {
    item(1, 2);
}

function testcallback(a, b) {
    console.log(a + b);
}
test1(testcallback);

Array.prototype.map2 = function (Callback) {
    var output = [], arrLength = this.length;
    for (let i = 0; i < arrLength; ++i) {
        let result = Callback(this[i], i)
        output.push(result);

        return output;
    }
}

var khoaHoc = [
    'JS',
    'PHP',
    'RUBY'
]

let htmls = khoaHoc.map2(function (khoahocs) {
    return `<h2>${khoahocs}</h2>`
})

console.log(htmls.join(''))

let abc = courses.filter(function (khoahoc1) {
    return khoahoc1.price === 111
})

console.log(abc)

Array.prototype.Filter2 = function (TSoccerCallback) {
    let output = [], arrLength = this.length
    for (let i = 0; i < arrLength; ++i) {
        let ok = TSoccerCallback(this[i])
        if (ok == true) {
            output.push(this[i])
        }
    }

    return output;
}

Array.prototype.Find2 = function (FindSCCallBack) {
    let output = [], arrLength = this.length
    for (let i = 0; i < arrLength; ++i) {
        let ok = FindSCCallBack(this[i])
        if (ok == true) {
            output.push(this[i])
            break;
        }
    }
    return output
}

Array.prototype.Some2 = function(SomeCallBack) {
    for(let index in this){
        if(this.hasOwnProperty(index)){
            if(SomeCallBack(this[index], index, this)){
                return true;
            };
        }
    }
    return false;
}

Array.prototype.every2 = function(callbackevery) {
    var output = true;
    for(let index in this){
        if(this.hasOwnProperty(index)){
            let result = callbackevery(this[index], index, this)
            if(!result) {
                output = false;
                break;
            }
        }
    }

    return output;
}

var PremerLeage = [
    {
        id: 1,
        name: 'mc',
        price: 1000,
        up : true
    },
    {
        id: 2,
        name: 'mu',
        price: 500,
        up : false
    },
    {
        id: 3,
        name: 'as',
        price: 100,
        up : true
    },
    {
        id: 4,
        name: 'aston',
        price: 20,
        up : true
    },
    {
        id: 5,
        name: 'cs',
        price: 50,
        up : true
    }
]

var everyResult = PremerLeage.every2(function(teamsc, index, array) {
    return teamsc.up;
})

console.log(everyResult)

var result1 = PremerLeage.Some2(function(teamsc, index, array) {
    return teamsc.up;
})

console.log(result1)

var reuslt = PremerLeage.Filter2(function (TS) {
    return TS.price <= 50
});

let resultFind = PremerLeage.Find2(function (FTS) {
    return FTS.price > 500;
});

console.log(reuslt)
console.log(resultFind)


Array.prototype.forEach3 = function(callbackABC) {
    for(let index in this){
        if(this.hasOwnProperty(index)){
            callbackABC(this[index], index, this)
        }
    }
}


var CoursesABC = ['JS','PHP','RUBY', 'NODEJS'];
var CoursesABC1 = ['JS','PHP','RUBY', 'NODEJS'];

CoursesABC.forEach3(function(value, index, array) {
    console.log(value, index, array);
})

let newArray = ['a', 'b', 'a', 'c', 'd', 'a', 'b', 'c', 'd']
console.log(newArray)
console.log(new Set(newArray))


























