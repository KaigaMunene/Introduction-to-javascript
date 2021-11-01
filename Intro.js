console.log("Hello world")

let a = 20
let b = "20"

console.log(a == b)
console.log(a === b)

let age = 20
if (age < 18) {
    console.log(" young");
}
else {
    console.log("adult");
}

console.log(age < 18 ? console.log("young"): console.log("adult"))  //use ofternary operator in if statement//

let gender = "female"
let y = gender === "male" ? 0 : 1;
console.log(y)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i = 1000; i <= 1010; i+=2) {
    console.log(i)
}

let i = 1000
while (i <= 1010) {
    console.log(i);
    i += 2
}

let aq = 51
while (aq <= 55) {
    console.log(aq)
    aq +=2 
}

i = 0;
do{
    console.log(i);
    i+= 2
}
while (i<0);

while (i<0){
    console.log(i)
}

age = 30
switch(age){
    case 10:
        console.log("Too young");
        break;

    case 15:
        console.log("Teen");
        break;
    
    case 18:
        console.log("young adult");
        break;
    
    case 30:
        console.log("adult");
        break;

    case 60:
        console.log("old")
        break;
    
    default:
        console.log();
}

value1 = 0
value2 = 0

function simple_calculator (value1, operator, value2) {
    switch(operator) {
        case "addition":
            console.log(value1 + value2);
            break;
    
        case "subtraction":
            console.log(value1 - value2);
            break;

        case "mutiplication":
            console.log(value1 * value2);
            break;

        case "division":
            console.log(value1 / value2);
            break;

        case "modulous":
            console.log(value1 % value2);
            break;

        default:
            console.log()

    }
}
console.log(simple_calculator(10, "subtraction", 4));

