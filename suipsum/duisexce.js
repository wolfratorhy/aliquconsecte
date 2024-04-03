const readline = require('readline');

// Create a single instance of readline.Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Use a single rl.question to ask for both name and age
rl.question('What is your name? ', (name) => {
  rl.question('How old are you? ', (age) => {
    // Template literals are used for cleaner string construction
    console.log(`Hello, ${name}. You are ${age} years old.`);
    // Close the readline interface after the interaction is complete
    rl.close();
  });
});
