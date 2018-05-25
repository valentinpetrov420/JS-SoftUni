function solve(arr){
    let result = '<ul>\n';
    for(let str of arr){
        result += ' <li>' + escapeChars(str) + '</li>\n'
    }
    function escapeChars(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    result += '</ul>';
    console.log(result);
}

solve(['<b>unescaped text</b>', 'normal text']
);