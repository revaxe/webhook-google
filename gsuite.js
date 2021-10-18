// https://developers.google.com/chat/quickstart/incoming-bot-node
const fetch = require('node-fetch')

const webhookURL = '<INCOMING-WEBHOOK-URL>'

module.exports = {
    /**
     * Permet d'envoyer un simple message sur le webhookURL
     * https://developers.google.com/chat/reference/message-formats/basic
     * https://developers.google.com/chat/reference/message-formats/cards
     * @param message
     */
    sendMessage(message) {
        const data = JSON.stringify({
            'text': message,
        })

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: data,
        }).then((response) => {
            console.log(response);
        })
    }
}
