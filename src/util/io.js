import socketIOClient from 'socket.io-client';

const WEBSOCKET_SERVER_URL =
    location.hostname === 'localhost'
        ? 'http://localhost:3000'
        : 'http://54.189.2.73:3000/';

const socket = socketIOClient(WEBSOCKET_SERVER_URL);

export default socket;

/*
socket.on('connect', console.log('oi'));
socket.on('event', function (data) {});
socket.on('disconnect', function () {});
*/
