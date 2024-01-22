const fs = require('fs/promises');
const path = require('node:path');
const sourceDirectory = path.join(__dirname, 'files');
const newDirectory = path.join(__dirname, 'files-copy');

async function copyDir() {
  try {
    await fs.mkdir(newDirectory, { recursive: true });
    const files = await fs.readdir(sourceDirectory);
    for (const file of files) {
      const filePath = path.join(sourceDirectory, file);
      const newFilePath = path.join(newDirectory, file);
      await fs.copyFile(filePath, newFilePath);
    }
    console.log('Copied. OK');
  } catch (error) {
    console.log(`Couldn't copy: ${error.message}`);
  }
}
copyDir();
