class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
        this.time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    }
}


let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', 'asd');
//myData.fulfilled = 'true';
//myData.response = 'handshaking...';
console.log(myData);