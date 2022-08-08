let sakuraHover = document.querySelector('#sakura')


sakuraHover.onmouseover =  alert('I warned you!')

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
