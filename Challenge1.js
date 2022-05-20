const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const BMI_Mark = markMass / markHeight ** 2;
const BMI_John = johnMass / johnHeight ** 2;

const markHigherBMI = BMI_Mark > BMI_John;

console.log(BMI_Mark, BMI_John, markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's (${BMI_John})!`);
}
else {
    console.log(`John's BMI (${BMI_John}) is higher than Marks's (${BMI_Mark})!`);
}


