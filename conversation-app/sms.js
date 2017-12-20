// Twilio Credentials
const accountSid = 'ACabc9fe6832731f9db82b6f9a4a9906d0';
const authToken = '0d0abca6bd871ca13a4a3ec9dcdb4abf';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '+14696008385',
        from: '+16785828887',
        body: 'Test from Nodejs?',
    })
    .then((message) => console.log(message));