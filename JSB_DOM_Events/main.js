let DomEvents = document.querySelector('.box')
console.log(DomEvents)


//DOM EVENTS
//1. Attribute events
//2. Assign event using the element node

let btns = document.querySelectorAll('h1')

for(let i = 0; i < btns.length; i++)
{
    btns[i].onclick = function(e) {
        console.log(e.target.innerText)
    }
}

let btnbtn = document.getElementById("btnbtn").addEventListener("click", function() {
    console.log(this.innerHTML)
})


//1. Input / select
//2. Key up / down

let inputElement = document.querySelector('input[type="text"]')
inputElement.onchange = function(e) {
    console.log(e.target.value)
}

inputElement.oninput = function(e) {
    console.log(e.target.value)
}


let inputElement1 = document.querySelector('input[type="checkbox"]')

let checkboxValue;
inputElement1.onchange = function(e) {
    checkboxValue = e.target.checked;
}

let selectElement1 = document.querySelector('select')
selectElement1.onchange = function(e) {
    console.log(e.target.value)
}

// key up down
// inputElement.onkeydown = function(e) {
//     console.log(e.target.value)
// }

inputElement.onkeyup = function(e) {
    console.log(e.target.value)
}

document.onkeydown = function(e) {
    switch(e.which) {
        case 27:
            console.log('exit')
            break;
    }
}

//1. preventDefault
//2. stopProagation

let aElements = document.querySelectorAll('a')

for(let i = 0; i < aElements.length; ++i){
    aElements[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://www.youtube.com/'))
        {
            e.preventDefault();
        }
    }
}

document.querySelector('ul').onclick = 
    function(e) {
        console.log(e.target)
    }

let ulElement = document.querySelector('ul')

ulElement.onmousedown = 
    function(e) {
        e.preventDefault()
    }

ulElement.onclick = 
    function(e) {
        console.log(e.target)
    }


document.getElementById('DIV').onclick =
    function() {
        console.log('DIV')
    }

document.getElementById('click-me').onclick =
    function(e) {
        e.stopPropagation()
        console.log('Clicked')
    }