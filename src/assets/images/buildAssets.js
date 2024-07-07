import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetFolders = ['Accessories', 'Head', 'Eyes', 'Uniform', 'Beak', 'Skin', 'Background'];
const assetPath = path.join(__dirname, '..', 'images', 'customize');

const assets = {};

assetFolders.forEach(folder => {
  const folderPath = path.join(assetPath, folder);
  try {
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.png'));
    assets[folder] = files;
  } catch (error) {
    // Tangani kesalahan jika direktori tidak ditemukan atau baca file gagal
    console.error(`Error reading files from ${folderPath}: ${error.message}`);
  }
});

const outputPath = path.join(__dirname, '..', 'images', 'customize', 'programAsset', 'programAsset.js');
const outputContent = `const assets = ${JSON.stringify(assets, null, 2)};\n\nexport default assets;\n`;

try {
  fs.writeFileSync(outputPath, outputContent);
  console.log('Asset build complete.');
} catch (error) {
  console.error(`Error writing to ${outputPath}: ${error.message}`);
}
