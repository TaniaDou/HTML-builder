const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, './text.txt');
const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
fileStream.on('data', (chunk) => {
  console.log(`${chunk}`);
});
fileStream.on('end', () => {
  console.log('Reading completed');
});
