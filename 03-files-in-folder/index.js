const fs = require('fs/promises');
const path = require('node:path');
const folderPath = path.join(__dirname, 'secret-folder');
async function showFileInfo() {
  try {
    const files = await fs.readdir(folderPath, { withFileTypes: true });
    for (const file of files) {
      const filePath = path.join(folderPath, file.name);
      if (file.isFile()) {
        const fileData = await fs.stat(filePath);
        const fileSize = fileData.size / 1024;
        console.log(`${file.name} - ${fileSize.toFixed(2)} kb`);
      } else {
        console.error(`Error: ${file.name} is a folder. Should be only files`);
      }
    }
  } catch (error) {
    console.error(`Error: couldn't read folder: ${error.message}`);
  }
}
showFileInfo();
