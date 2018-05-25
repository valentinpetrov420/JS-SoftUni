$(() => {
    const app = Sammy('#main', function(){
        this.use('Handlebars', 'hbs');

        this.get('#/index.html', (ctx) => {
            ctx.loadPartials({
                header: 'templates/header.hbs',
                footer: 'templates/footer.hbs'
            }).then(function (){
                this.partial('templates/home.hbs')
            });
            console.log(ctx.partials);
        });
        this.get('#/about', (ctx) => {
            ctx.loadPartials({
                header: 'templates/header.hbs',
                footer: 'templates/footer.hbs'
            }).then(function (){
                this.partial('templates/about.hbs')
            });
        });

        this.get('#/contact', (ctx) => {
            ctx.loadPartials({
                header: 'templates/header.hbs',
                footer: 'templates/footer.hbs'
            }).then(function (){
                this.partial('templates/contact.hbs')
            });
        });

        this.get('#/login', (ctx) => {
            ctx.loadPartials({
                header: 'templates/header.hbs',
                footer: 'templates/footer.hbs'
            }).then(function (){
                this.partial('templates/loginform.hbs')
            });
        });

        this.post('#/login', (ctx) => {
            ctx.redirect('#/contact');
            console.log(ctx.params.user);
            console.log(ctx.params.pass);
        });

        this.get('#/hello/:name', (ctx) => {
            ctx.title = 'Hello!';
            ctx.name = ctx.params.name;
            ctx.loadPartials({
                header: 'templates/header.hbs',
                footer: 'templates/footer.hbs'
            }).then(function (){
                this.partial('templates/greetings.hbs')
            });
        });
    });
    app.run();
});