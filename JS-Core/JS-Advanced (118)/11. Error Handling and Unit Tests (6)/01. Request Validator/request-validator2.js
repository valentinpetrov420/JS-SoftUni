function validateRequest(obj){

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^([A-Za-z0-9.]+)$/g;
    const messageRegex = /^[A-Za-z0-9^<>\\&'"]+$/g;

    let capitalizedProperties = {
        method: 'Method',
        uri: 'URI',
        version: 'Version',
        message: 'Message'
    };
    let validate = {
        method: () => {
            if(!obj.hasOwnProperty(('method'))){
                return false;
            }
            return validMethods.includes(obj['method']);

        },
        uri: () => {
            if(!obj.hasOwnProperty(('uri'))){
                return false;
            }
            return uriRegex.test(obj['uri']);

        },
        version: () => {
            if(!obj.hasOwnProperty(('version'))){
                return false;
            }
            return validVersions.includes(obj['version']);

        },
        message: () => {
            if(!obj.hasOwnProperty(('message'))){
                return false;
            }
            return !messageRegex.test(obj['message']);

        }
    };

    for(let property in validate){
        if(!validate[property]()){
            throw new Error(`Invalid request header: Invalid ${capitalizedProperties[property]}`);
        }
    }
    console.log(obj);
}

validateRequest({
    method: 'GET',
    uri: '...aaa666',
    version: 'HTTP/1.1',
    message: ''
});