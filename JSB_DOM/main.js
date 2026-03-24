//HTML DOM (Document Object Modle)

/**
    1. Element: lấy element trong DOM
        1: id
        2: class
        3: tagname
        4: css selector
        5: html collection
    2. Attribute
    3. Text :
        1: innerText : lấy ra những gì hiển thị trên giao diện
        2: textContent : lấy ra tất cả text node ở trong element
 */

console.log(document)

var headingNode = document.getElementById('heading')
console.log(headingNode)

console.log({
    element : headingNode
})

var headingNodeClassName = document.getElementsByClassName('heading')
console.log(headingNodeClassName)
console.log({
    element : headingNodeClassName
})

var headingtagname = document.getElementsByTagName('p');
console.log(headingtagname)

var headingNoteCSSSelector = document.querySelector('.heading')
console.log(headingNoteCSSSelector)

let boxNode = document.querySelector('.box-1')
console.log(boxNode)

console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.getElementsByTagName('p'))

let headingElement = document.querySelector('h2')
console.log(headingElement)

let headingElement1 = document.querySelector('a')
console.log(headingElement1)

//thêm atribute .title or .id or .className
headingElement.title = 'Heading-1'
headingElement1.setAttribute('class', 'heading1')

//get value của atribute
console.log(headingElement1.getAttribute('class'))
console.log(headingElement1.getAttribute('title'))





//lấy nội dung từ text node
let headingElement3 = document.querySelector('h3')
console.log(headingElement3.textContent)
console.log(headingElement3.innerText)

//sửa nội dung text node
headingElement3.innerText = 'new Heading 312'
headingElement3.textContent = 'new Heading 123'

//thêm element vào element
/**
  1. innerHTML
  2. outerHTML
 **/
let boxElement = document.querySelector('.box')
//boxElement.innerHTML = '<h4>add element</h4>'
//console.log(document.querySelector('h4').innerText)

boxElement.outerHTML = '<h1>test outer HTML</h1>'

let ContainerElement = document.querySelector('.container')
ContainerElement.classList.add('red')
ContainerElement.classList.toggle('yellow')
// ContainerElement.innerHTML = '<h2>abc</h2>'
// ContainerElement.innerHTML = '<h1>abcác</h1>'

console.log(ContainerElement.innerHTML)

ContainerElement.innerText = 'abc para'
ContainerElement.textContent = 'bcd para'

console.log(ContainerElement.innerText)
console.log(ContainerElement.textContent)

ContainerElement.title = 'title'
console.log(ContainerElement)












































































































