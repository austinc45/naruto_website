let empty = document.querySelector('#box')
let buttonRef = document.querySelector('#submit_button')


buttonRef.onclick = function onClick (e){
    e.preventDefault()
    let input = document.querySelector('#guess')
    let inputGuess = input.value
    let fullAnswer = document.querySelector('#answer')
    fullAnswer.innerHTML += inputGuess
    empty.style.display = 'none'
}


let sakuraHover = document.querySelector('#sakura')
let state = 0

sakuraHover.onmouseover = function(e){
    alert('proceed with caution. You have been warned!')
    state = 1
    if (state == 1){
        sakuraHover.onmouseover = null
    }
}

let characters = ['images/borutoRasengan.jpg','images/hinata.png',``]

//drop down 
let score = 0
let characterDrop = document.querySelector('#click')
let list = document.querySelector('#drop')
characterDrop.onclick = function on (){
    if (score == 0){
    list.style.display = 'block'
    score++
    }else{
        list.style.display = 'none'  
        score = 0
    }
}

let sakuraHover1 = document.querySelector('#sakura1')
sakuraHover1.onmouseover = function(e){
    alert('proceed with caution. You have been warned!')
    state = 1
    if (state == 1){
        sakuraHover1.onmouseover = null
    }
}
//