const number = document.getElementById('numbers');
const btnNum = document.getElementById('btn_number');


function addNumberTag (){
    const regex = new RegExp(`\\W`, 'g')
    const div = document.getElementById('div')
    const a = document.createElement('a')
    div.append(a)

    a.innerText = number.value.replace(regex, '')
    a.setAttribute('href', `tel:${number.value.replace(regex, '')}`)
}
btnNum.addEventListener('click', addNumberTag);