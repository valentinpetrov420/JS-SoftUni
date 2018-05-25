function validateRequest(request) {
    function validateMethod(method) {
        switch (method) {
            case 'GET':
            case 'POST':
            case 'DELETE':
            case 'CONNECT':
                return true;
            default:
                return false;
        }
    }
    function validateVersion(version) {
        switch (version) {
            case 'HTTP/0.9':
            case 'HTTP/1.0':
            case 'HTTP/1.1':
            case 'HTTP/2.0':
                return true;
            default:
                return false;
        }
    }
    function validateURL(url) {
        let urlRegex = /^([A-Za-z0-9.]+)$/g;
        if(urlRegex.test(url) || url === '*'){
            return true;
        }
        else{
            return false;
        }
    }
    function validateMessage(message) {
        let messageRegex = /^[^<>\\&'"]+$/g;
        if(messageRegex.test(message)){
            return false;
        }
        else{
            return true;
        }
    }

    if (request.method != undefined) {
        if (!validateMethod(request.method)) {
            throw new Error('Invalid request header: Invalid Method');
        }
    } else {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (request.uri != undefined) {
        if (!validateURL(request.uri)) {
            throw new Error('Invalid request header: Invalid Uri');
        }
    } else {
        throw new Error('Invalid request header: Invalid Uri');
    }
    if (request.version != undefined) {
        if (!validateVersion(request.version)) {
            throw new Error('Invalid request header: Invalid Version');
        }
    } else {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (request.message != undefined) {
        if (!validateMessage(request.message)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    } else {
        throw new Error('Invalid request header: Invalid Message');
    }
    return request;
}

console.log(validateRequest({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}));