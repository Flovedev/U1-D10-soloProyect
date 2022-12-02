function dice(max) {
    return Math.floor(Math.random() * max) + 1;
};

let diceResoult = dice(6);


let number = 6

for (let index = 0; index < number; index++) {
    let element = diceResoult;
    console.log(element)
}

