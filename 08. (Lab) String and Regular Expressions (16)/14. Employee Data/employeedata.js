function solve(str){
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9-   ]+)$/;
    let m = regex.exec(str);
    while(m){
        console.log(`Name: ${m[1]}`);
        console.log(`Position: ${m[2]}`);
        console.log(`Salary: ${m[3]}`);
        m = regex.exec(str);
    }
}

solve('Isacc - 1000 - CEO\n' +
    'Ivan - 500 - Employee\n' +
    'Peter - 500 - Employee\n');