import Requester from './dataclass';

let myData = new Requester('GET', 'http://google.com', 'HTTP/1.1', 'asd');
myData.fulfilled = true;
myData.response = 'handshaking...';
console.log(myData);