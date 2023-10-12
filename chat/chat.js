const ws = new WebSocket('ws://localhost:8080')
const firstInputButton = document.querySelector("#input-btn")
const firstInput = document.querySelector("#input")
const messageContainer = document.querySelector("#message-container");

firstInputButton.addEventListener('click', addUserMessage)

ws.onmessage = (webSocketMessage) => {
    const webSocketData = JSON.parse(webSocketMessage.data);
    messageContainer.innerHTML = '';
    webSocketData.messages.forEach(message => {
        const messageElement = createMessageElement(message);
        if (message.user === webSocketData.mainUser) {
            messageElement.classList.add("main-user")
        }
        messageContainer.appendChild(messageElement);
        messageElement.scrollIntoView();
    })
}

function addUserMessage(event) {
    if (firstInput.value === "") {
        return
    }
    const inputId = event.target.dataset.input;
    ws.send(JSON.stringify(firstInput.value))
    document.getElementById(inputId).value = "";
}

function createMessageElement(message) {
    const newMessageElement = document.createElement("div");
    const newMessageText = document.createElement("p");
    newMessageText.textContent = `${message.user} ${message.text}`;
    newMessageElement.className = "message";
    newMessageElement.appendChild(newMessageText);
    return newMessageElement;
}
