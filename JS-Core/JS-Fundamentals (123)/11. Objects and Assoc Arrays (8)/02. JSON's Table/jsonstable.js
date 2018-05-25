function solve(jsonArr) {
    let html = "";
    html += "<table>\n";
    for(let jsonStr of jsonArr){
        html += "  <tr>\n";
        let currentPerson = JSON.parse(jsonStr)
        let currentName = currentPerson['name'];
        let currentPos = currentPerson['position'];
        let currentSalary = currentPerson['salary'];
        html += `    <td>${htmlEscape(currentName.toString())}</td>\n`;
        html += `    <td>${htmlEscape(currentPos.toString())}</td>\n`;
        html += `    <td>${htmlEscape(currentSalary.toString())}</td>\n`;
        html += "  <tr>\n";
    }
    html += "</table>";
    console.log(html);

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