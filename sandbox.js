// Loops

// for loop

for(let i = 0; i < 5; i++){
    console.log(i);
}

const names = ['Alex', 'Deniss', 'Max', 'Ivan'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// while loop

let j = 0;

while(j < 5){
    console.log(`Current number: ${j}`);
    j++;
}

//if statement

const age = 18;

if (age > 21){
    console.log('Welcome to our page');
}

const workers = ['Deniss', 'Alex', 'Ina', 'Maria'];

if (workers.length > 3){
    console.log('That is big company');
}

// else if 

const password = 'pssword123121';

if(password.length > 12 && password.includes('@')){
    console.log('password is strong');
} else if(password.length > 8 || password.includes('@')){
    console.log('Password is too short or not strong');
} else if(!password.length == 10){
    console.log('We do not like your password');
} else {
    console.log('Password is weak');
}

console.log(!true);
console.log(!false);

//let ages = [9, 18, 35, 15]
//Loops through all elemnt (ages) and
// print if this person can drink alcohol

let ages = [9, 18, 35, 15];
let time = 21;
//If time > 22 - age doesn't matter, no alco
for (let i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        console.log(`You can drink alco, you are ${ages[i]}`);
    } else {
        console.log('You too young for alco');
    }
}

//Ilmarz
//ilmarz2
//Push 3

function greet(){
    console.log('Hello there')
}

greet();

const speak = function(name = 'Max', surename = 'Asshole'){
    console.log(`Hello ${name} ${surename}`)
}
speak();

const calcuateArea = function(radius){
    let area= 3.14 * radius**2;
    return area ;
}
const myCircle = calcuateArea(5);
console.log(myCircle)

const bill = function(product, tax){
    let total = 0;
    for (let i = 0; 1 < product.lenght; i++){
        total  += product [i] + product[i] * tax;
    }
    return total;
}

let people= ["max","dragon","kuksk"];
people.forEach(person=>{
    console.log(person);
})

//task


var numbers = [-15,88, 93, 14 ,44];
numbers.sort()
console.log(numbers);

//zzzzzzzzz


var numbers = [88,93,14, 44, 100000, 355,355,-13, 1];
function sortNumber(a,b)
{
    return a - b;
}
console.log(numbers.sort(sortNumber));

//zzzzzzz

let numberszz = [88,93,14, 44, -600,100000, 355, 3];
numberszz.sort((a, b)=> a - b);
console.log(numberszz)
/// commmit2