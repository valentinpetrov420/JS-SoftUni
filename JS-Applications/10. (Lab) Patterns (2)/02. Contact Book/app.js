$(() => {
    function isAuth() {
        return localStorage.getItem('authtoken') !== null;
    }

    function saveSession(userData){
        localStorage.setItem('authtoken', userData._kmd.authtoken);
        localStorage.setItem('username', userData.username);
        localStorage.setItem('userId', userData._id);
    }

    function register(username, password){
        let obj = { username, password };
        post('user', '', 'basic', obj)
            .then(saveSession)
            .catch(console.error);
    }

    async function login(username, password){
        let obj = { username, password };
        await post('user', 'login', 'basic', obj)
            .then(saveSession)
            .catch(console.error);
    }

    function logout(){
        post('user', '_logout', 'kinvey')
            .then(() => {
                localStorage.clear();
            })
            .catch(console.error);
    }

    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_SJFeHck3f';
    const APP_SECRET = 'ab02d766799f44eda267b7222c820490';

    // request method (GET, POST, PUT)
    // kinvey module (user/appdata)
    // url endpoint
    // auth
    function makeAuth(auth){
        if(auth === 'basic'){
            return `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`;
        } else {
            return `Kinvey ${localStorage.getItem('authtoken')}`;
        }
    }
    function makeRequest(method, module, endpoint, auth){
        return {
            url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
            method: method,
            headers: {
                'Authorization': makeAuth(auth)
            }
        }
    }

    function get( module, endpoint, auth){
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    function post(module, endpoint, auth, data) {
        let obj = makeRequest('POST', module, endpoint, auth);
        if(data){
            obj['data'] = data;
        }
        console.log(obj);
        return $.ajax(obj);
    }

    function update(module, endpoint, auth, data){
        let obj = makeRequest('PUT', module, endpoint, auth);
        obj['data'] = data;
        return $.ajax(obj);
    }

    function remove(module, endpoint, auth){
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    const app = Sammy('#main', function(){
        this.use('Handlebars', 'hbs');

        this.get('#/index.html', (ctx) => {
            ctx.isAuth = isAuth();
            console.log(ctx.isAuth);
            $.ajax('data.json')
                .then((contacts) => {
                    ctx.contacts = contacts;
                    ctx.loadPartials({
                        header: 'templates/common/header.hbs',
                        navigation: 'templates/common/navigation.hbs',
                        footer: 'templates/common/footer.hbs',
                        contactsPage: 'templates/contacts/contactsPage.hbs',
                        contact: 'templates/contacts/contact.hbs',
                        contactDetails: 'templates/contacts/contactDetails.hbs',
                        contactList: 'templates/contacts/contactList.hbs',
                        loginform: 'templates/forms/loginform.hbs'
                    }).then(function () {
                        ctx.partials = this.partials;
                        render();
                    });
                })
                .catch(console.error);

            function render () {
                ctx.partial('templates/welcome.hbs')
                    .then(attachEvents)
            }

            function attachEvents() {
                $('.contact').on('mouseover', (e) => {
                    let index = $(e.target).closest('.contact').attr('data-id');
                    ctx.selected = ctx.contacts[index];
                    render();
                });
            }
        });

        this.get('#/register.html', (ctx) => {
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                navigation: 'templates/common/navigation.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function(){
                this.partial('templates/forms/registerform.hbs')
            });
        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            console.log(username);
            let password = ctx.params.password;
            console.log(password);
            let passRepeat = ctx.params.passRepeat;

            if (password !== passRepeat){
                alert('Passwords do not match.')
            } else {
                register(username, password);
                ctx.redirect('#/index.html');
            }
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            console.log(username);
            let password = ctx.params.password;
            console.log(password);
            login(username, password);
            ctx.redirect('#/index.html');

        });
    });
    app.run();
});
