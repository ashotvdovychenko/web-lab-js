import * as ws from "ws";
const { WebSocketServer } = ws;

const clients = {
    user1: null,
    user2: null,
};
const messages = [];

const webSocketServer = new WebSocketServer({ port: 8080 });

webSocketServer.on('connection', (ws) => {
    let mainUser;

    if (clients.user1) {
        mainUser = 'user2';
        clients.user2 = ws;
    } else {
        mainUser = 'user1';
        clients.user1 = ws;
    }

    ws.send(JSON.stringify({ mainUser, messages }));

    ws.on('message', (stringifiedMessage) => {
        const text = JSON.parse(stringifiedMessage);

        messages.push({ date: new Date().getTime(), user: mainUser, text });

        for (let client in clients) {
            clients[client]?.send(JSON.stringify({ mainUser: client, messages }));
        }
    })

    ws.on('close', () => {
        clients[mainUser] = null;
    })
})

