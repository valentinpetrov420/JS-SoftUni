function solve(input) {
    let html = "<table>\n";
    let arr = JSON.parse(input);
    html += '   <tr>';
    let keys = Object.keys(arr[0]);
    for(let key of keys){
        html += `<th>${key}</th>`;
    }
    html += '</tr>\n';
    for(let obj of arr){
        html += '   <tr>';
        for(let i = 0; i < keys.length; i++){
            html += `<td>${htmlEscape(obj[keys[i]] + '')}</td>`
        }
        html += '</tr>\n';
    }
    return html + "</table>";
    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

console.log(solve('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
));