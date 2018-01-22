function solve(n) {
    let html = '<div class="chessboard">\n';
    for (let i = 1; i <= n; i++) {
        html += '   <div>\n';
        let color = (i % 2 == 0) ? 'white' : 'black';
        for (let j = 1; j <= n; j++) {
            html += `        <span class="${color}"></span>\n`;
            color = (color == 'white') ? 'black' : 'white';
        }
        html += '   </div>\n';
    }
    return html + '</div>';
}

console.log(solve(3));