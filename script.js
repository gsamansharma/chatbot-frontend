document.getElementById('chatbot-send').addEventListener('click', () => {
    const input = document.getElementById('chatbot-input').value;
    if (input) {
        addMessage(input, 'user');
        fetchResponse(input);
        document.getElementById('chatbot-input').value = '';
    }
});

document.getElementById('chatbot-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const input = document.getElementById('chatbot-input').value;
        if (input) {
            addMessage(input, 'user');
            fetchResponse(input);
            document.getElementById('chatbot-input').value = '';
        }
    }
});

function addMessage(message, sender) {
    const messages = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

async function fetchResponse(query) {
    try {
        const response = await fetch('https://chatbot-backend-91ec.onrender.com/botresponse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });
        const data = await response.json();
        addMessage(data.response, 'bot');
    } catch (error) {
        console.error('Error:', error);
        addMessage('Sorry, something went wrong.', 'bot');
    }
}
