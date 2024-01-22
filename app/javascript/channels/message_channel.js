import consumer from "channels/consumer"

const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});

document.addEventListener("turbo:load", () => {
  let form = document.querySelector('#message-form')
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let messageInput = document.querySelector('#message-input').value
      if(messageInput == '') return;
      const message = {
        body: messageInput
      }
      messageChannel.send({message: message})
    })
  }
})