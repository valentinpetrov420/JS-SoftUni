function solve(workerInfo){
    if(workerInfo.handsShaking == true){
        let requiredAlcohol = workerInfo.weight/10 * workerInfo.experience;
        workerInfo.bloodAlcoholLevel += requiredAlcohol;
        workerInfo.handsShaking = false;
    }
    return workerInfo;
}

console.log(solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }));