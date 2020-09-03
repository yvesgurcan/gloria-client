import socketIOClient from 'socket.io-client';

const WEBSOCKET_SERVER_URL =
    /*location.hostname === 'localhost'
        ? 'http://localhost:3000'
        :*/ 'https://54.189.2.73/';

const socket = socketIOClient(WEBSOCKET_SERVER_URL);

export default socket;
