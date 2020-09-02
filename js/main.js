//Menu Toggler
const toggler = document.querySelector(".Toggler");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
});

//Start Conversation Popup Change
const startConvo = document.querySelector(".Chatbot__convo__btn");

startConvo.addEventListener("click", () => {
  const desc = document.querySelector(".Chat__popup__desc");
  const convo = document.querySelector(".Chatbot__convo");
  const convo1 = document.querySelector(".Chatbot__convo1");
  const footer = document.querySelector(".Chatbot__popup__footer");
  convo.classList.add("change");
  desc.textContent = "The team typically replies in a few minutes.";
  convo1.classList.add("show");
  footer.classList.add("show");
});

//Chat
const sendChat = document.querySelector("#send-chat");

sendChat.addEventListener("click", (e) => {
  e.preventDefault();
  const msg = document.querySelector("#msg").value;
  if (msg) {
    const chat = document.querySelector(".Chatbot__convo__wrap");
    const footForm = document.querySelector(".Chatbot__popup__footer form");
    let reply;
    const output = document.createElement("div");
    output.classList.add("user", "chat");
    output.innerHTML = `<div class="user-chat">${msg}</div>`;
    chat.appendChild(output);
    footForm.reset();
    setTimeout(() => {
      const url = "https://api.adviceslip.com/advice";
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          reply = data.slip.advice;
          const chatWrap = document.createElement("div");
          chatWrap.classList.add("bot-wrap");
          chatWrap.innerHTML = `<small></small><div class="bot chat"><div class="bot-chat">${reply}</div></div>`;
          chat.appendChild(chatWrap);
        });
    }, 2000);
  }
});
