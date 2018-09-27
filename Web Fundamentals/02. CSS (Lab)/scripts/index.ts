function renderButtons(buttonCount: number){
    let result = document.createElement('div');
    result.setAttribute('id', 'buttons');
    let string = '';
    for (let i = 1; i <= buttonCount; i++) {
        string = '\n' +
            `<a href="#" class="button">Button ${i}</a>`;
        result.innerHTML += string;
    }
    document.getElementById('main').appendChild(result);
}