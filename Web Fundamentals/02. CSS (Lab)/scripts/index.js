function renderButtons(buttonCount) {
    var result = document.createElement('div');
    result.setAttribute('id', 'buttons');
    var string = '';
    for (var i = 1; i <= buttonCount; i++) {
        string = '\n' +
            ("<a href=\"#\" class=\"button\">Button " + i + "</a>");
        result.innerHTML += string;
    }
    document.getElementById('main').appendChild(result);
}
