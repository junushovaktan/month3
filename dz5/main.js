const URL = 'https://jsonplaceholder.typicode.com/users';
const inp = document.getElementById('inp');
const inp2 = document.getElementById('inp2');
const inp3 = document.getElementById('inp3');
const inp4 = document.getElementById('inp4');
const btn = document.getElementById('btn')
const list = document.getElementById('lists')

fetch(URL).then(res => {
            if (res.ok){
                return console.log(`Успешно`)
            }else{
                return console.log(`Ошибка`)
            }
        })
function showInfo() {
    fetch(URL)
        .then(res => res.json())
        .then(response => response.forEach(e => {
            list.innerHTML += `
            <div class="dv">
               <p>ID: ${e.id}</p>
               <p>NAME: ${e.name}</p>
               <p>USERNAME: ${e.username}</p>
               <p>EMAIL: ${e.email}</p>
            </div>   
           `
        }))
}
 showInfo()
function postUsers() {
    const obj = {
        id: inp.value,
        user: inp2.value,
        username: inp3.value,
        email: inp4.value
    }
    console.log(obj)
    fetch(URL, {method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })
}

btn.addEventListener('click', postUsers)