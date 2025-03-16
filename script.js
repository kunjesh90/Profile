document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
      const details = this.nextElementSibling;

      if (details && details.classList.contains("details")) {
        details.classList.toggle("show");
        
        if (details.classList.contains("show")) {
          this.textContent = "Hide Details";
        } else {
          this.textContent = "Show Details";
        }
      }
    });
  });
});

//chatbot js code starts
document.getElementById("chat-icon").addEventListener("click", function() {
  document.getElementById("chat-window").style.display = "flex";
});

document.getElementById("close-chat").addEventListener("click", function() {
  document.getElementById("chat-window").style.display = "none";
});

document.getElementById("send-message").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      sendMessage();
  }
});

function sendMessage() {
  let userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  // Add User Message
  let userMessage = document.createElement("p");
  userMessage.classList.add("user-message");
  userMessage.textContent = userInput;
  document.getElementById("chat-messages").appendChild(userMessage);

  document.getElementById("user-input").value = ""; // Clear input

  // Auto-Response (Dummy Bot)
  setTimeout(() => {
      let botMessage = document.createElement("p");
      botMessage.classList.add("bot-message");
      botMessage.textContent = "I know you're curious! I'll end your curiosity soon... Till then, stay tuned!";
      document.getElementById("chat-messages").appendChild(botMessage);

      // Scroll to latest message
      document.getElementById("chat-body").scrollTop = document.getElementById("chat-body").scrollHeight;
  }, 500);
}
//chatbot js code ends
