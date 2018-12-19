const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_B1gCgfdgV';
const APP_SECRET = 'f6f8d4b7fafe4712b1da09aee9a73b28';

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
}

function register(username, password) {
    let obj = { username, password };
    post('user', '', 'basic', obj)
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

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                home: './templates/home/home.hbs'
            }).then(function () {
                this.partial('./templates/home/homePage.hbs');
            });
        }

        this.get('#/login', displayLogin);
        this.post('#/login', (ctx) => {
            try {
                let username = ctx.params.username_login;
                let password = ctx.params.password_login;
                if (username == '' || password == '') {
                    showError('All fields must be filled!')
                } else {
                    console.log(username);
                    console.log(password);
                    login(username, password)
                        .then(() => {
                            setTimeout(() => {
                                ctx.redirect('#/index.html');
                                showInfo('Login Successful');
                            }, 2000)
                        }).catch(console.error);
                }
            } catch (error) {
                console.log(error.message);
                setTimeout(() => {
                    ctx.redirect('#/index.html');
                    showInfo('Login Successful');
                }, 2000)
            }
        });

        function displayLogin(context) {
            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                login: './templates/login/login.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs');
            })
        }

        this.get('#/register', displayRegister);
        this.post('#/register', (ctx) => {
            try {
                $("#loadingBox").css("display", "block");
                let username = ctx.params.username_register;
                let password = ctx.params.password_register;
                let repeatpass = ctx.params.password_register_check;
                if (username.length >= 5) {
                    if (username === '' || password === '') {
                        showError('All fields must be filled!')
                    } else {
                        if (password === repeatpass) {
                            register(username, password);
                            setTimeout(() => {
                                showInfo('Registration Successful');
                                $("#loadingBox").css("display", "none");
                                ctx.redirect('#/index.html');
                            }, 3000);
                        } else {
                            $("#loadingBox").css("display", "none");
                            showError('Passwords do not match!')
                        }
                    }
                } else {
                    $("#loadingBox").css("display", "none");
                    showError('Username must be at least 5 characters long!');
                }
            } catch (error) {
                showError(error);
            }
        });

        function displayRegister(context) {
            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                register: './templates/register/register.hbs'
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs');
            })
        }

        this.get('#/logout', (ctx) => {
            $("#loadingBox").css("display", "block");
            logout();
            ctx.redirect('#/my-listings.html');
            ctx.redirect('#/index.html');
            showInfo('Logout Successful');
            $("#loadingBox").css("display", "none");
        })

        this.get('#/car-listing', displayCarListing);

        function displayCarListing(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            let ownCars = [];
            let otherCars = [];

            get('appdata', 'cars', 'Kinvey').then(
                (cars) => {
                    for (let i = 0; i < cars.length; i++) {
                        console.log(cars[i].seller);
                        console.log(context.username);
                        if (cars[i].seller == context.username) {
                            ownCars.push(cars[i]);
                        } else {
                            otherCars.push(cars[i]);
                        }
                    }
                    console.log(cars);
                    context.ownCars = ownCars;
                    context.otherCars = otherCars;
                }
            )
            setTimeout(() => {
                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    carlisting: './templates/car-listing/carlisting.hbs'
                }).then(function () {
                    this.partial('./templates/car-listing/carlistingPage.hbs');
                })
            }, 2000);
        }

        this.get('#/create-listing', displayCreateListing)
        this.post('#/create-listing', (ctx) => {
            let seller = sessionStorage.getItem('username');
            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let year = ctx.params.year;
            let imageUrl = ctx.params.imageUrl;
            let fuel = ctx.params.fuelType;
            let price = ctx.params.price;

            if (title.length > 33) {
                showError('The title length must not exceed 33 characters!');
            } else if (description.length < 50 || description.length > 450) {
                showError('The description length must not exceed 450 characters and should be at least 30!');
            } else if (brand.length > 11 || fuel.length > 11 || model.length > 11) {
                showError('The brand,fuelType and model length must not exceed 11 characters!');
            } else if (model.length < 4) {
                showError('The model length should be at least 4 characters');
            } else if (year.length > 4) {
                showError('The year must be only 4 chars long!');
            } else if (price > 1000000) {
                showError('Maximum price is 1000000$!');
            } else if (!imageUrl.startsWith('http')) {
                showError('Link url should always start with “http”.');
            } else if (title.length == 0 || description.length == 0 || brand.length == 0 || fuel.length == 0 || model.length == 0 || year.length == 0 || price.length == 0) {
                showError('You must fill all the fields!');
            } else {
                let obj = {
                    title,
                    description,
                    brand,
                    model,
                    year,
                    imageUrl,
                    fuel,
                    price,
                    seller
                }
                post('appdata', 'cars', 'Kinvey', obj).then(() => {
                    ctx.redirect('#/car-listing');
                })
            }
        })

        function displayCreateListing(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createlisting: './templates/create-listing/createlisting.hbs'
            }).then(function () {
                this.partial('./templates/create-listing/createlistingPage.hbs');
            })
        }

        this.get('#/my-listings', displayMyListings);

        function displayMyListings(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            let myCars = [];
            get('appdata', 'cars', 'Kinvey').then(
                (cars) => {
                    for (let i = 0; i < cars.length; i++) {
                        if (cars[i].seller == context.username) {
                            myCars.push(cars[i]);
                        }
                    }
                    context.myCars = myCars;
                }
            )
            setTimeout(() => {
                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    mylistings: './templates/my-listings/mylistings.hbs'
                }).then(function () {
                    this.partial('./templates/my-listings/mylistingsPage.hbs');
                })
            }, 2000);
        }

        this.get('#/edit-listing/:id', displayEdit);
        this.put('#/edit-listing/:id', (ctx) => {
            let seller = sessionStorage.getItem('username');
            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let year = ctx.params.year;
            let imageUrl = ctx.params.imageUrl;
            let fuel = ctx.params.fuelType;
            let price = ctx.params.price;

            if (title.length > 33) {
                showError('The title length must not exceed 33 characters!');
            } else if (description.length < 50 || description.length > 450) {
                showError('The description length must not exceed 450 characters and should be at least 30!');
            } else if (brand.length > 11 || fuel.length > 11 || model.length > 11) {
                showError('The brand,fuelType and model length must not exceed 11 characters!');
            } else if (model.length < 4) {
                showError('The model length should be at least 4 characters');
            } else if (year.length > 4) {
                showError('The year must be only 4 chars long!');
            } else if (price > 1000000) {
                showError('Maximum price is 1000000$!');
            } else if (!imageUrl.startsWith('http')) {
                showError('Link url should always start with “http”.');
            } else if (title.length == 0 || description.length == 0 || brand.length == 0 || fuel.length == 0 || model.length == 0 || year.length == 0 || price.length == 0) {
                showError('You must fill all the fields!');
            } else {
                let obj = {
                    title,
                    description,
                    brand,
                    model,
                    year,
                    imageUrl,
                    fuel,
                    price,
                    seller
                }

                console.log(obj);
                update('appdata', `cars/${ctx.params.id}`, 'Kinvey', obj).then(() => {
                    ctx.redirect('#/my-listings');
                    showInfo('Edited listing.')
                })
            }
        });

        function displayEdit(context) {
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            let id = context.params.id;
            get('appdata', `cars/${id}`, 'Kinvey').then((car) => {
                context.car = car;
            });
            setTimeout(() => {
                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    editlisting: './templates/edit-listing/editlisting.hbs'
                }).then(function () {
                    this.partial('./templates/edit-listing/editlistingPage.hbs');
                })
            }, 2000);
        }

        this.get('#/delete/:id', deleteListing);

        function deleteListing(context){
            let id = context.params.id;
            remove('appdata', `cars/${id}`, 'Kinvey').then((res) => {
                showInfo('Deleted successfully');
                context.redirect('#/index.html');
                context.redirect('#/car-listings');
            });
        }

        this.get('#/details/:id', displayDetails);

        function displayDetails(context){
            context.isLogged = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            let id = context.params.id;
            let isOwner = false;
            get('appdata', `cars/${id}`, 'Kinvey').then((car) => {
                context.car = car;
                if(context.car.seller == context.username){
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
    });
    app.run();
    console.log('launched app')
}