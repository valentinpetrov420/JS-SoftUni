function solve(str){
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for(let element of str){
        let m = regex.exec(element);
        if(m){
            console.log(`Name: ${m[1]}`);
            console.log(`Position: ${m[3]}`);
            console.log(`Salary: ${m[2]}`);
            m = regex.exec(element);
        }
    }
}

solve(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Team Employee']);