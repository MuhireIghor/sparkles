const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', () => {
    const message = userInput.value;
    if (message) {
        addMessage('User', message);
        respondToMessage(message);
        userInput.value = '';
    }
});

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${text}`;
    messages.appendChild(messageElement);
}

function respondToMessage(message) {
    // Simple bot response logic
    let response = "I'm here to help. How are you feeling today?";
    if(
        message.toLowerCase(). includes('hey')) {
            response="hey, how can i assist you today"
        }
        if(
            message.toLowerCase().includes('muraho')){
               response="muraho neza"
            }
        
    
    if (message.toLowerCase().includes('sad')) {
        response = "I'm sorry to hear that. Want to talk about it?";
    }
    addMessage('Bot', response);
}

// Voice Assistant functionality
const voiceBtn = document.getElementById('voice-btn');

voiceBtn.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onstart = function() {
        addMessage('Assistant', 'Listening...');
    };
    recognition.onresult = function(event) {
        const voiceInput = event.results[0][0].transcript;
        addMessage('User', voiceInput);
        respondToMessage(voiceInput);
    };
    recognition.start();
});

// Event Planner functionality
const eventForm = document.getElementById('event-form');
const eventsList = document.getElementById('events-list');

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;

    if (eventName && eventDate) {
        const eventItem = document.createElement('div');
        eventItem.textContent = `${eventName} - ${eventDate}`;
        eventsList.appendChild(eventItem);

        // Clear form
        document.getElementById('event-name').value = '';
        document.getElementById('event-date').value = '';
    }
});