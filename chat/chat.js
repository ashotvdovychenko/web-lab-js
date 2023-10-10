const messageContainer = document.querySelector("#message-container")

function addFirstUserMessage() {
    const messageElement = createMessageElement("first-input");
    messageElement.className += " main-user";
    displayMessageInContainer(messageElement)
    document.getElementById("first-input").value = "";
}

function addSecondUserMessage() {
    const messageElement = createMessageElement("second-input");
    displayMessageInContainer(messageElement)
    document.getElementById("second-input").value = "";
}

function createMessageElement(inputId) {
    const messageText = document.getElementById(inputId).value;
    if (messageText.trim() === "") {
        return
    }
    const newMessageElement = document.createElement("div");
    newMessageElement.className = "message";
    const newMessageText = document.createElement("p");
    newMessageText.textContent = messageText;

    newMessageElement.appendChild(newMessageText);
    return newMessageElement;
}

function displayMessageInContainer(messageElement) {
    messageContainer.appendChild(messageElement);
}