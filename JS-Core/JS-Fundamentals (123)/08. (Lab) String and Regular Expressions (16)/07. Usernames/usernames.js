function solve(arr) {
    let finalResult = [];
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split('@');
        let domains = token[1].split('.');
        let result = token[0] + '.';
        for (let str of domains) {
            result += str[0];
        }
        finalResult.push(result);
    }
    console.log(finalResult.join(', '))
}


solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);