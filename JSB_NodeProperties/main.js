let boxElement = document.querySelector('.box')
console.log(boxElement)

boxElement.style.width = '100px'
boxElement.style.height = '200px'
boxElement.style.backgroundColor = 'red'

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green'
// })

//classList property
/**
    1. add
    2. contains
    3. remove
    4. toggle : nếu có thì xóa nếu không thì thêm
 */
console.log(boxElement.classList)


boxElement.classList.add('aqua', 'red')

console.log(boxElement.classList.contains('aqua'))

//boxElement.classList.remove('aqua')

//console.log(boxElement.classList.contains('aqua'))

boxElement.classList.toggle('aqua')
boxElement.classList.toggle('yellow')

let ContainerElement = document.querySelector('.container')
ContainerElement.classList.add('RANDOMCOLOR')
ContainerElement.classList.toggle('aqua')
ContainerElement.classList.remove('aqua')





