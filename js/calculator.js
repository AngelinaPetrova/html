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
    input.value = eval(input.value);
}
document.querySelector('.calculator .clean').addEventListener('click', cleanPressed)
function cleanPressed() {
    const input = document.querySelector('.input');
    input.value = '';
}
function decimal (argument) {
    const input = document.querySelector('.input');
		if (inputResult) 
		{
			input = "0.";
			inputResult = false;
		}
		else
		{
			if (input.indexOf(".") == -1)
				inputResult += ".";
		}
		document.querySelector('.input') = input;
};
