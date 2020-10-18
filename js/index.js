alert('Hello JavaScript');
let productPrice = 200 + 1;
alert(productPrice);
productPrice = productPrice * 1.1;
alert(productPrice);
let userName = prompt('Enter your name');
alert(userName);
const userAge = Number(prompt("Enter your age"));
alert('Your age is ' + userAge);
const nextAge = add(userAge, 1);
alert('Next year you will be ' + nextAge);

if (userAge < 18) {
    alert('You are not underaged');
} else{
    alert('You are adult');
}
function add(a, b) {
    const sum = a + b;
    return sum;
}