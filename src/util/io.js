import socketIOClient from 'socket.io-client';

const { WEBSOCKET = 'https://gloria-server.twentyfour7.com' } = process.env;

const WEBSOCKET_SERVER_URL =
    location.hostname === 'localhost' ? 'http://localhost:3000' : WEBSOCKET;

const socket = socketIOClient(WEBSOCKET_SERVER_URL);

export default socket;
