const num = document.getElementById('contador')
const sub = document.getElementById('dec')
const add = document.getElementById('add')

add.addEventListener('click', ()=>{
  num.innerText = parseInt(num.innerText)+1
})

sub.addEventListener('click', ()=>{
    num.innerText = parseInt(num.innerText)-1
})