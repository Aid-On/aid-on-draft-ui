import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function injectStyles() {
  const stylesPath = path.join(__dirname, '../dist/styles.css');
  const indexPath = path.join(__dirname, '../dist/index.js');

  const styles = await fs.readFile(stylesPath, 'utf8');
  const index = await fs.readFile(indexPath, 'utf8');

  const updatedIndex = `
const style = document.createElement('style');
style.textContent = ${JSON.stringify(styles)};
document.head.appendChild(style);

${index}
`;

  await fs.writeFile(indexPath, updatedIndex);
  await fs.unlink(stylesPath); // Remove the separate CSS file
}

injectStyles().catch(console.error);
