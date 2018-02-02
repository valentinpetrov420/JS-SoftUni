function solve(json) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += " <tr>";
    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += "</tr>\n";
    for (let obj of arr) {

    }
    return html + "</table>";

    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);