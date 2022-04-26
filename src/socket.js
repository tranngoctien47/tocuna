import { io } from "socket.io-client"
import { port } from "./port";

const socket = io(port, {
    transports: ['websocket', 'polling', 'flashsocket']
});
export default socket
