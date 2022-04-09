const wor = {
    id: 1,
    name: 'Rid',
    surname: 'richards',
}

const workt = {
    id: 2,
    name: 'peace',
    surname: 'maker'
}

const jsonUser = JSON.stringify(wor);
const jsonUsers = JSON.stringify(workt);

localStorage.setItem('wor', jsonUser)
localStorage.setItem('workt', jsonUsers)

const data = localStorage.getItem('wor');

console.log(JSON.parse(data));


const deleteBtn = document.getElementById('removed');
deleteBtn.addEventListener("click", function (){
    localStorage.removeItem('workt')
});


const deleteBtnAll = document.getElementById('delete');
deleteBtnAll.addEventListener("click", function (){
    localStorage.clear()
});