let auth = (() => {

    function saveSession(userData){
        localStorage.setItem('authtoken', userData._kmd.authtoken);
        localStorage.setItem('username', userData.username);
        localStorage.setItem('userId', userData._id);
    }

    function register(username, password){
        let obj = { username, password };
        requester.post('user', '', 'basic', obj)
            .then(saveSession)
            .catch(console.error);
    }

    function login(username, password){
        let obj = { username, password };
        requester.post('user', 'login', 'basic', obj)
            .then(saveSession)
            .catch(console.error);
    }

    function logout(){
        requester.post('user', '_logout', 'kinvey')
            .then(() => {
            localStorage.clear();
            })
            .catch(console.error);
    }

    return {
        login,
        logout,
        register,
        saveSession
    }
});