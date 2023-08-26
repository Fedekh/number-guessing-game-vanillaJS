let numberPc = Math.floor(Math.random() * 100) + 1;
const btn = document.querySelector('button');
const reset = document.querySelector('#reset');
const tentativi = document.querySelector('#try');
const risultato = document.querySelector('#result');
let numTen = 0;
console.log(numberPc);


let input = document.querySelector('input');

btn.addEventListener('click', () => {
    const inputt = parseInt(input.value);
    if (!isNaN(inputt) && inputt > 0 && inputt < 101) {
        tentativi.innerHTML += ` ${inputt} `;
        if (inputt == numberPc) {
            risultato.innerHTML = `Hai vinto con ${numTen + 1} tentativi, resetta il game`
            btn.disabled = true
            console.log(input);
            console.log('numeto tentativi: ', numTen);
        } else if (inputt !== numberPc && numTen < 9) {
            risultato.innerHTML = 'sbagliato riprova'
            numTen++
            console.log('numeto tentativi: ', numTen);

        } else {
            risultato.innerHTML = 'Gioco terminato, clicca resetta'
            btn.disabled = true
        }
    } else {
        risultato.innerHTML = 'Amico inserisci un numero compreso tra 1 e 100'

    }

})


reset.addEventListener('click', () => {
    numTen = 0;
    input.value = '';
    btn.disabled = false
    tentativi.innerHTML = ''
    risultato.innerHTML = ''
    numberPc = Math.floor(Math.random() * 100) + 1;
    console.log(numberPc);

})