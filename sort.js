ar numbers = [-15,88, 93, 14 ,44];
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

var numberszz = [88,93,14, 44, -600,0,100000, 355, 3];
numberszz.sort((a, b)=> a - b);
console.log(numberszz)