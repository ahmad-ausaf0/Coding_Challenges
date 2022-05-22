const Mark_Miller = {
    fullName: 'Mark Miller',
    Mass: 78,
    Height: 1.69,
    calcBMI: function () {
        this.bmi = this.Mass / this.Height ** 2;
        return this.bmi;
    }

};
const John_Smith = {
    fullName: 'John Smith',
    Mass: 92,
    Height: 1.95,
    calcBMI: function () {
        this.bmi = this.Mass / this.Height ** 2;
        return this.bmi;
    }
};

Mark_Miller.calcBMI();
John_Smith.calcBMI();
console.log(Mark_Miller.bmi, John_Smith.bmi);


if (John_Smith.bmi > Mark_Miller.bmi) {
    console.log(`${John_Smith.fullName}'s BMI (${John_Smith.bmi}) is higher than ${Mark_Miller.fullName}'s BMI (${Mark_Miller.bmi})`);
}
else if (Mark_Miller.bmi > John_Smith.bmi) {
    console.log(`${Mark_Miller.fullName}'s BMI (${Mark_Miller.bmi}) is higher than ${John_Smith.fullName}'s BMI (${John_Smith.bmi})`);
}


