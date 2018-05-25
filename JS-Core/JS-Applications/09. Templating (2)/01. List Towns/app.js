function attachEvents(){
    $('#btnLoadTowns').on('click', renderTowns);

    function renderTowns() {
        let towns = $('#towns').val().split(', ').map(e => ({name: e}));
        console.log(towns);
        loadTowns(towns);
    };

    async function loadTowns(towns){
        let source = await $.get('town-template.hbs');
        console.log(source);
        let compiled = Handlebars.compile(source);
        let template = compiled({
            towns: towns
        });
        console.log(template);
        $('#root').html(template);
    }
}