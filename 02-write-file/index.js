const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, './new.txt');
const readline = require('node:readline');
const writer = fs.createWriteStream(filePath, {
  flags: 'a',
});
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
  prompt: 'Write your text message:\n',
});
console.log('Write "exit" or press Ctrl+C to break');
rl.prompt();
rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('Buy!');
    rl.close();
  } else {
    writer.write(`${input}\n`);
    rl.prompt();
  }
});
rl.on('close', () => {
  writer.end();
  process.exit(0);
});
rl.on('SIGINT', () => {
  console.log('Break the work as you press Ctrl+C');
  rl.close();
});
