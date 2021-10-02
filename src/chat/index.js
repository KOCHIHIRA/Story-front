var socket;

const init = () => {
    socket = new WebSocket("ws://localhost:3001/ws");
    return socket;
}

const connect = () => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = msg => {
    const data = JSON.parse(msg.data);
    console.log("Recive: " + JSON.parse(msg.data).body)
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = msg => {
  socket.send(msg);
};

const closeWs = () => {
    socket.close();
}

export { connect, sendMsg, init, closeWs };