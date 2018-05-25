$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let cats = window.cats;
        console.log(cats);

        let source = await $.get('cat-template.hbs');
        let compiled = Handlebars.compile(source);
        let template = compiled({
            cats: cats
        });

        $('body').append(template);
        $('button').click((ev) => {
            let targetBtn = $(ev.target);
            console.log(targetBtn);
            let divInfo = targetBtn.next();
            let text = targetBtn.text();
            if(text.includes('Show')){
                targetBtn.text(text.replace('Show', 'Hide'));
            }else{
                targetBtn.text(text.replace('Hide', 'Show'));
            }
            divInfo.toggle();

        });
    }
});
