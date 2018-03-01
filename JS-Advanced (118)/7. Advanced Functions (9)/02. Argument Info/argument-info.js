function solve(arguments) {
    let summary = new Map;
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    let sortedTypes = [...summary].sort((a, b) => b[1] - a[1]);
    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }
    sortedTypes.forEach(entry => console.log(`${entry[0]} = ${entry[1]}`));
}

solve(['cat', 42, function () { console.log('Hello world!') }]);