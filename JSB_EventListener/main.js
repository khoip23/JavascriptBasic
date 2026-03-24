let text = document.querySelector('h2')
console.log(text)

text.classList.toggle('textCenter')

//event listener
text.addEventListener('click', function(e) {
    console.log(Math.random())
})

function Test() {
    console.log('Test')
}
text.addEventListener('click', Test)

//hủy lắng nghe (sau 3 giây không lắng nghe sự kiện Test nữa)
setTimeout(function() {
    text.removeEventListener('click', Test)
}, 3000)
