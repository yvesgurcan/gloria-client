import socketIOClient from 'socket.io-client';

const WEBSOCKET_SERVER_URL =
    /*location.hostname === 'localhost'
        ? 'http://localhost:3000'
        :*/ 'https://54.191.191.113/';

const socket = socketIOClient(WEBSOCKET_SERVER_URL);

export default socket;
