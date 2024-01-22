const fs = require('node:fs/promises');
const path = require('node:path');
const fromWhere = path.join(__dirname, 'styles');
const toWhere = path.join(__dirname, 'project-dist');
const mergeFile = path.join(toWhere, 'bundle.css');

async function mergeBundle() {
  try {
    await fs.mkdir(toWhere, { recursive: true });
    const files = await fs.readdir(fromWhere);
    const stylesFiles = files.filter((file) => path.extname(file) === '.css'); //проверяем css файлы
    const cssContent = await Promise.all(
      stylesFiles.map(async (file) => {
        const filePath = path.join(fromWhere, file);
        const fileDataSet = await fs.readFile(filePath, 'utf-8');
        return fileDataSet;
      }),
    );
    await fs.writeFile(mergeFile, cssContent.join('\n'));
    console.log('Merged. OK');
  } catch (error) {
    console.error(`Couldn't merge: ${error.message}`);
  }
}
mergeBundle();
