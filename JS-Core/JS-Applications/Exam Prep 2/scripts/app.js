const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_HyHUAEFxN';
const APP_SECRET = '0478a948076c4c5d8036ac036a9d6e26';

const loadingBoxColor = '#7CB3E9';
const infoBoxColor = '#393';
const errorBoxColor = '#F50';

$('#loadingBox').css({ background: loadingBoxColor });
$('#infoBox').css({ background: infoBoxColor });
$('#errorBox').css({ background: errorBoxColor });

function isAuth() {
    return sessionStorage.getItem('authtoken') !== null;
}

function saveSession(userData) {
    sessionStorage.setItem('authtoken', userData._kmd.authtoken);
    sessionStorage.setItem('username', userData.username);
    sessionStorage.setItem('userId', userData._id);
    sessionStorage.setItem('avatarUrl', userData.avatarUrl);
    sessionStorage.setItem('email', userData.email);
}

function register(data) {
    post('user', '', 'basic', data)
        .then(saveSession)
        .catch(console.error);
}

function login(username, password) {
    let obj = { username, password };
    post('user', 'login', 'basic', obj)
        .then(saveSession)
        .catch(console.error);
}

function logout() {
    post('user', '_logout', 'Kinvey')
    sessionStorage.clear();
}

function makeAuth(auth) {
    if (auth === 'basic') {
        return `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`;
    } else {
        return `Kinvey ${sessionStorage.getItem('authtoken')}`;
    }
}

function makeRequest(method, module, endpoint, auth) {
    return {
        url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
        method: method,
        headers: {
            'Authorization': makeAuth(auth)
        }
    }
}

function get(module, endpoint, auth) {
    return $.ajax(makeRequest('GET', module, endpoint, auth));
}

function post(module, endpoint, auth, data) {
    let obj = makeRequest('POST', module, endpoint, auth);
    if (data) {
        obj['data'] = data;
    }
    console.log(obj);
    return $.ajax(obj);
}

function update(module, endpoint, auth, data) {
    let obj = makeRequest('PUT', module, endpoint, auth);
    obj['data'] = data;
    return $.ajax(obj);
}

function remove(module, endpoint, auth) {
    return $.ajax(makeRequest('DELETE', module, endpoint, auth));
}

function showInfo(message) {
    showPopup(message, true);
}

function showError(message) {
    showPopup(message, false);
}

function showPopup(message, isInfo) {
    let selector = isInfo ? '#info' : '#error';
    let targetPopup = $(selector + 'Box');
    targetPopup.text(message);
    targetPopup.on('click', () => targetPopup.fadeOut());
    if (isInfo) {
        setTimeout(() => targetPopup.fadeOut(), 3000);
        targetPopup.fadeIn();
    }
    targetPopup.fadeIn();
}

function startApp() {
    const app = Sammy('#app', function () {
        console.log('started app');
        this.use('Handlebars', 'hbs');

        $(document).on({
            ajaxStart: function () {
                $("#loadingBox").show();
            },
            ajaxStop: function () {
                $("#loadingBox").hide();
            }
        });

        this.get('index.html', displayHome);
        this.get('#/home', displayHome);

        function displayHome(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            if (context.isLogged) {
                console.log('logged in');
                let memeFeed = [];
                let otherFeed = [];
                get('appdata', 'memes', 'Kinvey').then(
                    (memes) => {
                        for (let i = 0; i < memes.length; i++) {
                            if (memes[i].creator == context.username) {
                                memeFeed.push(memes[i]);
                            } else {
                                otherFeed.push(memes[i]);
                            }
                        }

                        context.memeFeed = memeFeed;
                        context.otherFeed = otherFeed;

                        context.loadPartials({
                            header: './templates/common/header.hbs',
                            footer: './templates/common/footer.hbs',
                            home: './templates/home/home.hbs'
                        }).then(function () {
                            this.partial('./templates/home/homePage.hbs');
                        });

                    });
            } else {
                console.log('logged out');
                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    home: './templates/home/home.hbs'
                }).then(function () {
                    this.partial('./templates/home/homePage.hbs');
                });
            }
        }

        this.get('#/logout', (ctx) => {
            logout();
            sessionStorage.clear();
            ctx.redirect('#/index.html');
        })

        this.get('#/register', displayRegister);
        this.post('#/register', (ctx) => {
            try {
                let username = ctx.params.username_register;
                let password = ctx.params.password_register;
                let repeatpass = ctx.params.password_register_check;
                let email = ctx.params.email_register;
                let avatarUrl = ctx.params.avatarUrl_register;

                let obj = {
                    username,
                    password,
                    email,
                    avatarUrl,
                }

                console.log(obj);
                if (username.length >= 5) {
                    if (username === '' || password === '') {
                        showError('All fields must be filled!')
                    } else {
                        if (password === repeatpass) {
                            register(obj);
                            setTimeout(() => {
                                showInfo('Registration Successful');
                                ctx.redirect('#/index.html');
                            }, 3000);
                        } else {
                            showError('Passwords do not match!')
                        }
                    }
                } else {
                    showError('Username must be at least 5 characters long!');
                }
            } catch (error) {
                showError(error);
            }
        })

        function displayRegister(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                register: './templates/register/register.hbs'
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs');
            });
        }

        this.get('#/login', displayLogin)
        this.post('#/login', (ctx) => {
            try {
                let username = ctx.params.username_login;
                let password = ctx.params.password_login;

                if (username.length >= 5) {
                    if (username === '' || password === '') {
                        showError('All fields must be filled!')
                    } else {
                        login(username, password);
                        setTimeout(() => {
                            showInfo('Registration Successful');
                            ctx.redirect('#/index.html');
                        }, 3000);
                    }
                } else {
                    showError('All fields must be filled!')
                }
            } catch (error) {
                showError(error);
            }
        })

        function displayLogin(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                login: './templates/login/login.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs');
            });
        }

        this.get('#/create', displayCreate);
        this.post('#/create', (ctx) => {
            let creator = sessionStorage.getItem('username');
            let title = ctx.params.title;
            let description = ctx.params.description;
            let imageUrl = ctx.params.imageUrl;

            if (title.length > 33) {
                showError('The title length must not exceed 33 characters!')
            } else if (description.length > 450 && description.length < 30) {
                showError('The description length must not exceed 450 characters and should be at least 30!')
            } else if (!imageUrl.startsWith('http')) {
                showError('Link url should always start with “http”.');
            } else if (title.length == 0 || description.length == 0 || imageUrl.length == 0) {
                showError('You must fill all the fields!');
            } else {
                let obj = {
                    title,
                    description,
                    imageUrl,
                    creator
                }
                post('appdata', 'memes', 'Kinvey', obj).then(() => {
                    ctx.redirect('#/index.html');
                })
            }
        })

        function displayCreate(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                create: './templates/create/create.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs');
            });
        }

        this.get('#/details/:id', displayDetails)

        function displayDetails(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            let id = context.params.id;
            let isOwner = false;

            get('appdata', `memes/${id}`, 'Kinvey').then((meme) => {
                context.meme = meme;
                if (context.car.creator == context.username) {
                    isOwner = true;
                } else {
                    isOwner = false;
                }
                context.isOwner = isOwner;
            });

            setTimeout(() => {
                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    details: './templates/details/details.hbs'
                }).then(function () {
                    this.partial('./templates/details/detailsPage.hbs');
                })
            }, 2000);
        }
        this.get('#/edit/:id', displayEdit);
        this.put('#/edit/:id', (ctx) => {
            let creator = sessionStorage.getItem('username');
            let title = ctx.params.title;
            let description = ctx.params.description;
            let imageUrl = ctx.params.imageUrl;

            if (title.length > 33) {
                showError('The title length must not exceed 33 characters!')
            } else if (description.length > 450 && description.length < 30) {
                showError('The description length must not exceed 450 characters and should be at least 30!')
            } else if (!imageUrl.startsWith('http')) {
                showError('Link url should always start with “http”.');
            } else if (title.length == 0 || description.length == 0 || imageUrl.length == 0) {
                showError('You must fill all the fields!');
            } else {
                let obj = {
                    title,
                    description,
                    imageUrl,
                    creator
                }
                update('appdata', `memes/{{ctx.params.id}}`, 'Kinvey', obj).then(() => {
                    ctx.redirect('#/index.html');
                    showInfo('Meme edited');
                })
            }
        });

        function displayEdit(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            let id = context.params.id;

            get('appdata', `memes/${id}`, 'Kinvey').then((meme) => {
                context.meme = meme;
            });
            setTimeout(() => {
                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    edit: './templates/edit/edit.hbs'
                }).then(function () {
                    this.partial('./templates/edit/editPage.hbs');
                })
            }, 2000);
        }

        this.get('#/delete-meme/:id', (context) => {
            let id = context.params.id;
            remove('appdata', `memes/${id}`, 'Kinvey').then(() => {
                showInfo('Deleted successfully');
                context.redirect('#/index.html');
            });
        })

        this.get('#/user/:name', displayProfile);

        function displayProfile(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            let currentUser = context.params.name;
           
            let url = `https://baas.kinvey.com/appdata/${APP_KEY}/memes/?query={"creator":"${currentUser}"}`
            $.get({
                url,
                success: querySuccess,
                headers: {
                    'Authorization': makeAuth('Kinvey')
                }
            });
            function querySuccess(res){
                context.userMemes = res;

                let userUrl = `https://baas.kinvey.com/user/${APP_KEY}?query={"username":"${currentUser}"}`;
                $.get({
                    url: userUrl,
                    success: userRequestSuccess,
                    headers: {
                        'Authorization': makeAuth('Kinvey')
                    }
                })
                function userRequestSuccess(res){
                    console.log(res);

                    context.avatarUrl = res[0].avatarUrl;
                    context.email = res[0].email;
                    context.currentUser = res[0].username;

                    context.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        user: './templates/user/user.hbs'
                    }).then(function () {
                        this.partial('./templates/user/userPage.hbs');
                    })
                }
            }
        }
    });
    app.run();
}