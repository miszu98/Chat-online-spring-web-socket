var client = null;

function connect() {
    client = Stomp.client("ws://localhost:8080/chat")
    client.connect({}, function (frame) {
        client.subscribe("/topic/messages", function (message) {
            showMessage(JSON.parse(message.body).text, JSON.parse(message.body).user);
        })
    })
}

function showMessage(message, nick) {
    var response = document.getElementById("mess");
    var updateResponse = document.createElement('p');
    updateResponse.appendChild(document.createTextNode(nick + ": "));
    updateResponse.appendChild(document.createTextNode(message));
    response.appendChild(updateResponse);
}

function sendMessage() {
    var messageToSend = document.getElementById('toSend').value;
    var nick = document.getElementById('nick').value;
    client.send("/app/chat", {}, JSON.stringify({'text' : messageToSend, 'user' : nick}));
}