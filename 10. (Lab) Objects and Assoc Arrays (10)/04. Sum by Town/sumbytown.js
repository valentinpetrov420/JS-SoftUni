function solve(input){
    let sums = {};
    for(let i = 0; i < input.length - 1; i+=2){
        let [towns, income] = [input[i], Number(input[i+1])];
        if(sums[towns] == undefined){
            sums[towns] = income;
        }
        else{
            sums[towns] += income;
        }
    }
    console.log(JSON.stringify(sums));
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);
solve(['Sofia','20','Varna','3','sofia','5','varna','4']);