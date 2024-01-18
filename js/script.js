// function lua () {
//     var s = document.getElementById('s').value;
//     var lua = 4*s;

//     document.getElementById('lua').innerHTML = lua;
// }

// function kel () {
//     var s = document.getElementById('s').value;
//     var kel = s*s;

//     document.getElementById('kel').innerHTML = kel;
// }

const sisi = document.getElementById('sisi');
const sisis = document.getElementById('sisis');
const hitung = document.getElementById('hitung');
const hitungs = document.getElementById('hitungs')
const outputs = document.getElementById('outputs');
const output = document.getElementById('output')


hitung.addEventListener('click', function() {
    let s = sisi.value;
    let kel = s*4 ;
    outputs.innerHTML = kel;
})

hitungs.addEventListener('click', function() {
    let ss = sisis.value;
    let luas = ss*ss;
    output.innerHTML = luas;
    output.preventDefault()
})



