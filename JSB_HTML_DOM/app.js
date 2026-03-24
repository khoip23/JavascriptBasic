//JSON
// 1. Stringify: từ JS  types => JSON
// 2. Parse: từ JSON => JS types
// var json = '312'
    // var json = '["JS", "C#"]'
    var json = '{"name":"khoi312", "age":24}'
console.log(JSON.parse(json))

//Promise
// 1. Sync: đồng bộ: Đi mua trà sữa → đứng đợi → xong mới làm việc khác
// 2. Async: bất đồng bộ: Order trà sữa → đi làm việc khác → khi nào có thì lấy
// 3. nỗi đau
// 5. thực hành và ví dụ

setTimeout(function() {
    console.log(2);
}, 2000)

console.log(1)

// 4. lý thuyết và cách hoạt động: xử lý thao tác bất đồng bộ trước khi có promise ta thường dùng callback ta sẽ có lúc gặp trường hợp callback hell nó trở nên rối rắm khó hiểu 
var promise = new Promise(
    function(resolve, reject) {
        // resolve([
        //     {
        //         id: 1,
        //         name: 'js'
        //     }
        // ]);
        reject('failed')
    }
)

promise
    .then(function(course) {
        console.log(course)
    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        console.log('done')
    })


function Dinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let haveMoney = true;
            if(haveMoney){
                resolve('KFC')
            }
            else{
                reject('you are poor bitch!')
            }
        }, 2000)
    })
}

Dinner()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    // .finally(fnl => console.log('Done bitch'))

Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num * 3)
    .then(result => console.log(result)); // 12


function sum() {
    return new Promise((resolve, reject) => {
        resolve(3)
    })
}

sum()
    .then(num => num * 2)
    .then(num => num * 3)
    .then(result => console.log(result)); // 18

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
        // reject('có lỗi')
    })
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000)
    })
    .then(function() {
        console.log(2);
        return sleep(1000)
    })
    .then(function() {
        console.log(3);
        return sleep(1000)
    })
    .then(function() {
        console.log(4);
        return sleep(1000)
    })
    .catch(function(err) {
        console.log(err)
    })



var newpromise = new Promise(
    function (resolve, reject) {
        resolve('Success')
    }
)

newpromise
    .then(function(result) {
        console.log('result: ', result)
    })
    .catch(function (err) {
        console.log('error: ', err)
    })