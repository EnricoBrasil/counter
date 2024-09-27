const num = document.getElementById('contador');
const sub = document.getElementById('dec');
const add = document.getElementById('add');
const resul = document.getElementById('resultado');
const n1 = document.getElementById('m1').value;
const n2 = document.getElementById('m2').value;
const n3 = document.getElementById('m3').value;
const media = document.getElementById('calc');

// contador
add.addEventListener('click', ()=>{
  num.innerText = parseInt(num.innerText)+1
})

sub.addEventListener('click', ()=>{
    num.innerText = parseInt(num.innerText)-1
})

// calcular media
function calcularMedia(n1,n2,n3)
{
   return (n1+n2+n3)/3
}

let res = calcularMedia(2,2,4)
