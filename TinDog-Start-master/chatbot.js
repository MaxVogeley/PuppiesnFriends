const chatbot = {
    greeting: 'Hi! I\'m your art chatbot. How can I help you today?',
    farewell: 'Thanks for chatting with me! Have a great day.',
    questions: {
      'artwork': 'What kind of artwork are you interested in?',
      'artist': 'Which artist are you interested in?',
      'pricing': 'What is your budget for artwork?',
    },
    responses: {
      'artwork': 'We have a variety of artwork including paintings, sculptures, and photographs. You can browse our collection on our website.',
      'artist': 'We feature a variety of talented artists, including local and international artists. You can learn more about them on our website.',
      'pricing': 'Our prices vary depending on the artwork and artist. You can find pricing information on our website, or you can contact us for more information.',
    },
  };
  
  // Define the chatbot elements
  const chatContainer = document.getElementById('chat-container');
  const messageContainer = document.getElementById('message-container');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  
  // Define a function to add a message to the chatbot
  function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
  
  // Define a function to send a message to the chatbot
  function sendMessage() {
    const message = messageInput.value;
    if (!message) {
      return;
    }
    addMessage(message, 'user');
    messageInput.value = '';
    const response = chatbot.responses[message.toLowerCase()];
    if (response) {
      addMessage(response, 'chatbot');
    } else {
      addMessage('I\'m sorry, I don\'t understand. Please try again.', 'chatbot');
    }
  }
  
  // Add event listeners to send messages
  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      sendMessage();
    }
  });
  
  // Initialize the chatbot with a greeting
  addMessage(chatbot.greeting, 'chatbot');