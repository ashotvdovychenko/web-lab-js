const messageContainer = document.querySelector("#message-container")
const firstInput = document.querySelector("#first-input-btn")
const secondInput = document.querySelector("#second-input-btn")

firstInput.addEventListener('click', addUserMessage)
secondInput.addEventListener('click', addUserMessage)

function addUserMessage(event) {
    const inputId = event.target.dataset.input;
    const messageElement = createMessageElement(inputId);
    if (inputId === "first-input") {
        messageElement.classList.add("main-user")
    }
    messageContainer.appendChild(messageElement);
    document.getElementById(inputId).value = "";
}

function createMessageElement(inputId) {
    const messageText = document.getElementById(inputId).value;
    const newMessageElement = document.createElement("div");
    const newMessageText = document.createElement("p");
    newMessageText.textContent = messageText;
    if (messageText.trim() === "") {
        return
    }
    newMessageElement.className = "message";
    newMessageElement.appendChild(newMessageText);
    return newMessageElement;
}