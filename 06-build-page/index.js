const fs = require('node:fs/promises');
const path = require('node:path');
const fromWhere = path.join(__dirname);
const toWhere = path.join(fromWhere, 'project-dist');
const templateHtmlPath = path.join(fromWhere, 'template.html');
const indexHtmlPath = path.join(toWhere, 'index.html');
const assetsDirection = path.join(fromWhere, 'assets');
const newAssetsDirection = path.join(toWhere, 'assets');

async function buildPage () {
  try {
    await fs.mkdir(toWhere, {recursive: true});
    const templateHtml = await fs.readFile(templateHtmlPath, 'utf-8');
  }
}