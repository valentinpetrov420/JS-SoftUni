function solve(str){
    let regex = /[,;(). \s]+/;
    let result = str.split(regex);
    console.log(result.join('\n'))
}

solve('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');