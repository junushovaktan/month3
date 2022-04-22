const url = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.responseType = 'json'


xhr.onload = function() {
    const list = document.getElementById('list');

    xhr.response.forEach(e => {
        list.innerHTML += ` 
            <div> 
                <p>ID: ${e.id}</p> 
                <p>Имя: ${e.name}</p> 
                <p>Логин: ${e.username}</p> 
                <p>Почта: ${e.email}</p> 
                <p>Телефон: ${e.phone}</p> 
                <p>Сайт: ${e.website}</p> 
            </div> 
        `
    })

    console.log(xhr.response)
};


xhr.send();


// 2task
const password = document.getElementById('inp');
const btn = document.getElementById('btn')


function enterPassword() {
    const moon = new XMLHttpRequest();
    if (!password.value.trim()) {
        console.log(moon.response + 'поле пустое')
    } else {
        const list = {
            password: password.value
        }
          moon.open('POST', url);
          moon.responseType = 'json';
          moon.onload = function () {
                console.log("Добро пожаловать "+ password.value)
        }
        moon.setRequestHeader("Content-Type", "application/json")
        moon.send(JSON.stringify(list))
    }

}

btn.addEventListener('click', enterPassword)
