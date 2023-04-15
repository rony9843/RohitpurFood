import { io } from "socket.io-client";
const socket = io.connect(
  "https://rohitpursocket-io-production.up.railway.app/"
);
export default socket;
