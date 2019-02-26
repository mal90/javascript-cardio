const name = 'Melanie';
const messages = 5;

function hello(strings, ...values) {
 console.log('Strings:', strings);
 console.log('Values:' ,values);
}

const welcome = hello`Hello, ${name}! You have ${messages} new messages.`