const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');

sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if (!userText) return;
  appendMessage('You', userText);
  userInput.value = '';

  // Show thinking message
  appendMessage('Chef AI', 'Thinking…');

  // Simulate AI response after 1–2 s
  setTimeout(() => {
    // Remove the “Thinking…” message
    removeLastAIMessage();
    // Provide a simple canned response (or real API call)
    appendMessage('Chef AI', `Here’s something based on: "${userText}"`);
  }, 1500);
});

clearBtn.addEventListener('click', () => {
  chatLog.innerHTML = '';
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function removeLastAIMessage() {
  const msgs = chatLog.querySelectorAll('.message');
  for (let i = msgs.length‑1; i >= 0; i--) {
    if (msgs[i].innerHTML.startsWith('<strong>Chef AI')) {
      chatLog.removeChild(msgs[i]);
      break;
    }
  }
}
