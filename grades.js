const scores = [82, 91, 62, 95, 55, 98, 69, 82, 78, 84, 64, 58, 87, 60];

const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
}; // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
    switch (true) {
        case scores[i] > 90 :
            grades.A += 1;
            break;
        case scores[i] > 80 :
            grades.B += 1;
            break;
        case scores[i] > 70 :
            grades.C += 1;
            break;
        case scores[i] > 60 :
            grades.D += 1;
            break;
        default : 
            grades.F += 1;
        
    }
}

for (let key in grades) {
    console.info(`${grades[key]} got ${key}'s`);
}
let lowScore = 0;
let numToCompare = 100;

for (let i = 0; i < scores.length; i++){
    if (numToCompare > scores[i]){
        lowScore = scores[i];
        numToCompare = scores[i];
    } else {
        lowScore = numToCompare;
    }
}

console.log(lowScore + " is the lowest score.");

let highScore = 0;
numToCompare = 0;

for (let i = 0; i < scores.length; i++){
    if (scores[i] > numToCompare){
        highScore = scores[i];
        numToCompare = scores[i];
    } else {
        highScore = numToCompare;
    }
}

console.log(highScore + " is the highest score.");


numToCompare = 0;
let mostGrade = 0;
for (let key in grades) {
    let currentGradeCount = grades[key];
    if (currentGradeCount > numToCompare) {
        numToCompare = currentGradeCount;
        mostGrade = key;
    } 
}

console.log("Most students received: " + mostGrade);

numToCompare = 100;
let leastGrade = 0;

for (let key in grades) {
    let currentGradeCount = grades[key];
    if (currentGradeCount < numToCompare) {
        numToCompare = currentGradeCount;
        leastGrade = key;
    } 
}
console.log("Least students received: " + leastGrade);



