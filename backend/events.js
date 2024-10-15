// events.js
import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Create an event listener
myEmitter.on('sendEmail', (email) => {
  console.log(`Event received: ${email} Emitting message`);
  sendWelcomeEmail(email)
});


// Function to simulate sending a welcome email
const sendWelcomeEmail = (email) => {
    console.log(`Sending welcome email to: ${email}`);
};

export { myEmitter };
