import socketIOClient from 'socket.io-client';

const WEBSOCKET_SERVER_URL = 'https://gloria-server.twentyfour7.com';
const socket = socketIOClient(WEBSOCKET_SERVER_URL);

export default socket;
