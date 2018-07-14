import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_B12s6KGmX";
const kinveyAppSecret = "7fe5116d05ad483b8e18df3b380160f4";
const kinveyMasterSecret = "faf57ca679de4a90a180ddbe1bcff3f8";

function makeAuth(type) {
    if(type === 'basic'){
        return 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
    } else if (type === 'delete'){
        return 'Basic ' + btoa(kinveyAppKey + ':' + kinveyMasterSecret)
    } else {
        return 'Kinvey ' + sessionStorage.getItem('authtoken');
    }
}

function makeRequest(method, module, endpoint, auth, query) {
    let url = kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint;
    if (query) {
        url += '?query=' + JSON.stringify(query);
    }

    return {
        method,
        url: url,
        headers: {
            'Authorization': makeAuth(auth),
        }
    };
}

function get(module, endpoint, auth, query) {
    return $.ajax(makeRequest('GET', module, endpoint, auth, query));
}

function post(module, endpoint, auth, data) {
    let req = makeRequest('POST', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

function update(module, endpoint, auth, data) {
    let req = makeRequest('PUT', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

function remove(module, endpoint, auth) {
    return $.ajax(makeRequest('DELETE', module, endpoint, auth));
}

export default {
    get,
    post,
    update,
    remove
}