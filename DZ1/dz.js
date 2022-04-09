const phons = [
    "iphone",
    "samsung",
    "redmi",
    "poco",
    "sony"
];

const input = document.getElementById('input');
const btn = document.getElementById('btn');

function Search (a){
    a.preventDefault()
    phons.forEach(element => {
        const regex = new RegExp(`${input.value}`, 'gi');
        const result = regex.test(phons)
        if (input.value === ''){
            console.log('Напишите что-нибудь')
            return result === false
        }
        else if (result === false){
            console.log('Ничего не найдено')
        }
        else if (result ===  true){
            console.log("Нашли!")
        }
    });
}

btn.addEventListener('click', Search);