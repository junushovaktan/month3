// const number = '+996-555-555-555';

//
// const result = number.replace(regex, '')
// console.log(result);
// console.log(number);

// const  result = text.replace(regex, '$& Актан');
// console.log(result)

///test

// const phoneNumber = document.getElementById('numberPhone');

//

//

//


const phoneNumbers = document.querySelectorAll('.numberPhone');

const regex = /\W/gi

phoneNumbers.forEach(phoneNumber => {
    const textPhoneNumber = phoneNumber.textContent;
    const resultNumber = textPhoneNumber.replace(regex, '');
    phoneNumber.setAttribute('href', `tel:${resultNumber}`);

})

const user = {
    name: "Aktan",
    surname: "Junushov"
}

const regexUser = /[a-z]/g

console.log(`${user.name.replace(regexUser, '*')} 
${user.surname.replace(regexUser, '*')}`)







