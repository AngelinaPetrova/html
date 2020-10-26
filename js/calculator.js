document.querySelectorAll('.calculator .digits')
    .forEach( button => button.addEventListener('click', digitPressed) );
function digitPressed(ev) {
    const btn = ev.target;
    const input = document.querySelector('.input');
    input.value += btn.innerText; 
}
document.querySelectorAll('.calculator .operators')
    .forEach( button => button.addEventListener('click', operatorPressed) );
function operatorPressed(ev) {
    const btn = ev.target;
    const input = document.querySelector('.input');
    input.value += btn.innerText; 
}

document.querySelector('.calculator .eq').addEventListener('click', eqPressed)
function eqPressed() {
    const input = document.querySelector('.input');
    if (eval(input.value) === Infinity) {
        input.value = 'Infinity';
    }
    if (eval(input.value) === undefined) {
        input.value = '0';
    }
    input.value = eval(input.value);
}
document.querySelector('.calculator .clean').addEventListener('click', cleanPressed)
function cleanPressed() {
    const input = document.querySelector('.input');
    input.value = '';
}
document.querySelector('.calculator .back').addEventListener('click', backPressed);
function backPressed() {
    const input = document.querySelector('.input');
    input.value = input.value.substring(0, input.value.length - 1);
}
