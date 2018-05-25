function getPersonalBmi(name, age, weight, height) {
    function getStatus() {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }

    let heightInMeters = height / 100;
    let bmi = weight / Math.pow(heightInMeters, 2);
    let evaluation = {
        name: name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: Math.round(bmi),
        status: getStatus()
    };

    if (evaluation.status === 'obese') {
        evaluation.recommendation = 'admission required';
    }

    return evaluation;
}

console.log(getPersonalBmi("Honey Boo Boo", 9, 57, 137));