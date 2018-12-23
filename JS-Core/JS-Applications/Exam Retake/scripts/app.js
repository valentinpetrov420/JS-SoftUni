const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_S1RwDGqlN';
const APP_SECRET = '37b0314e01f24c818332fe5480cc4eae';

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
}

function register(data) {
  post('user', '', 'basic', data)
    .then(() => {
      saveSession();
      showInfo('Registration Successful');
    })
    .catch((err) => {
      showError(`${err.responseJSON.description}`);
    });
}

function login(username, password) {
  let obj = { username, password };
  post('user', 'login', 'basic', obj)
    .then((res) => {
      saveSession(res);
      showInfo('Login Successful');
    })
    .catch((err) => {
      showError(`${err.responseJSON.description}`);
    });
  ;
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
  const app = Sammy('#container', function () {
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

        console.log(username);
        console.log(username.length);

        if (username.length > 5) {
          if (password.length > 5) {

            login(username, password);
            setTimeout(() => {
              ctx.redirect('#/all-songs');
            }, 3000);
          } else {
            showError('password should be more than 5 characters')
          }
        } else {
          showError('username should be more than 5 characters')
        }
      } catch (error) {
        showError(error);
      }
    });
    function displayLogin(context) {
      sessionStorage.setItem('lastRoute', '#/login');
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

    this.get('#/logout', (ctx) => {
      logout();
      sessionStorage.clear();
      ctx.redirect('#/index.html');
    });

    this.get('#/register', displayRegister);
    this.post('#/register', (ctx) => {
      try {
        let username = ctx.params.username_register;
        let password = ctx.params.password_register;
        if (username.length > 5) {
          if (password.length > 5) {
            let obj = {
              username,
              password
            }
            register(obj);
            setTimeout(() => {
              ctx.redirect('#/all-songs');
            }, 3000);
          } else {
            showError('password should be more than 5 characters')
          }
        } else {
          showError('username should be more than 5 characters')
        }
      } catch (error) {
        showError(error);
      }
    });

    function displayRegister(context) {
      sessionStorage.setItem('lastRoute', '#/register');
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
    this.get('#/create', displayCreate);
    this.post('#/create', (ctx) => {

      let title = ctx.params.title;
      let artist = ctx.params.artist;
      let imageURL = ctx.params.imageURL;
      let likes = 0;
      let listened = 0;
      let creator = sessionStorage.getItem('username');

      if (title.length < 5) {
        showError('The title should be at least 6 characters long!')
      } else if (artist.length < 3) {
        showError('The artist should be at least 3 characters long')
      } else if (!imageURL.startsWith('http')) {
        showError('Link url should always start with “http”.');
      } else if (title.length == 0 || artist.length == 0 || imageURL.length == 0) {
        showError('You must fill all the fields!');
      } else {
        let obj = {
          title,
          artist,
          imageURL,
          creator,
          likes,
          listened
        }
        post('appdata', 'songs', 'Kinvey', obj).then(() => {
          ctx.redirect('#/my-songs');
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

    this.get('#/all-songs', displayAllSongs);

    function displayAllSongs(context) {
      context.isLogged = sessionStorage.getItem('authtoken') !== null;
      context.username = sessionStorage.getItem('username');
      if (context.isLogged) {
        sessionStorage.setItem('lastRoute', '#/all-songs');
        console.log(context.isLogged);
        let mySongs = [];
        let otherSongs = [];
        get('appdata', 'songs', 'Kinvey').then((res) => {
          for (let i = 0; i < res.length; i++) {
            if (res[i].creator == context.username) {
              mySongs.push(res[i]);
            } else {
              otherSongs.push(res[i]);
            }
          }
          context.mySongs = mySongs;
          context.otherSongs = otherSongs;

          context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            allsongs: './templates/allsongs/allsongs.hbs'
          }).then(function () {
            this.partial('./templates/allsongs/allsongsPage.hbs');
          });
        })
      } else {
        context.redirect(`${sessionStorage.getItem('lastRoute')}`);
      }
    }

    this.get('#/my-songs', displayMySongs);

    function displayMySongs(context) {
      sessionStorage.setItem('lastRoute', '#/my-songs');
      if (!context.isLogged) {
        context.isLogged = sessionStorage.getItem('authtoken') !== null;
        context.username = sessionStorage.getItem('username');

        let currentUser = sessionStorage.getItem('username');

        let url = `https://baas.kinvey.com/appdata/${APP_KEY}/songs/?query={"creator":"${currentUser}"}`
        $.get({
          url,
          success: querySuccess,
          headers: {
            'Authorization': makeAuth('Kinvey')
          }
        });

        function querySuccess(res) {
          context.mySongs = res;
          context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            mysongs: './templates/mysongs/mysongs.hbs'
          }).then(function () {
            this.partial('./templates/mysongs/mysongsPage.hbs');
          })
        }
      } else {
        context.redirect(`${sessionStorage.getItem('lastRoute')}`);
      }
    }

    this.get('#/delete/:id', (ctx) => {
      let id = ctx.params.id;
      remove('appdata', `songs/${id}`, 'Kinvey').then(() => {
        showInfo('Deleted successfully');
        ctx.redirect('#/all-songs')
      });
    })
    this.get('#/listen/:id', (ctx) => {
      let id = ctx.params.id;
      get('appdata', `songs/${id}`, 'Kinvey').then((song) => {
        ctx.song = song;
        let listened = song.listened;
        let listenedToNum = Number(listened);
        let creator = sessionStorage.getItem('username');
        if (listened == undefined || listened == null) {
          listened = Number(0);
        }
        listenedToNum += 1;
        let obj = {
          title: song.title,
          artist: song.artist,
          imageURL: song.imageURL,
          creator: creator,
          listened: listenedToNum,
          likes: song.likes
        }
        console.log(obj);
        update('appdata', `songs/${id}`, 'Kinvey', obj).then(() => {
          showInfo(`You just listened ${song.title}`);
          setTimeout(() => {
            if (sessionStorage.getItem('lastRoute') == '#/all-songs') {
              ctx.redirect('#/all-songs');
            } else if (sessionStorage.getItem('lastRoute') == '#/my-songs') {
              ctx.redirect('#/my-songs');
            }
          }, 1000);
        })
      });
    })
    this.get('#/like/:id', (ctx) => {
      let id = ctx.params.id;
      get('appdata', `songs/${id}`, 'Kinvey').then((song) => {
        ctx.song = song;
        let likes = song.likes;
        let likesToNum = Number(likes);
        if (likes == undefined || likes == null) {
          likes = Number(0);
        }
        likesToNum += 1;
        let obj = {
          title: song.title,
          artist: song.artist,
          imageURL: song.imageURL,
          creator: song.creator,
          listened: song.listened,
          likes: likesToNum
        }
        console.log(obj);
        update('appdata', `songs/${id}`, 'Kinvey', obj).then(() => {
          showInfo(`Liked!`);
          setTimeout(() => {
            ctx.redirect('#/all-songs');
          }, 1000);
        })
      });
    })
  });
  app.run();
  console.log('launched app')
}