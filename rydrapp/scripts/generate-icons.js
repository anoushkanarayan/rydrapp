const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgBuffer = fs.readFileSync(path.join(__dirname, '../favicon.svg'));

// Generate main app icon
sharp(svgBuffer)
  .resize(1024, 1024)
  .png()
  .toFile(path.join(__dirname, '../assets/icon.png'))
  .then(() => console.log('Generated icon.png'))
  .catch(err => console.error('Error generating icon.png:', err));

// Generate adaptive icon
sharp(svgBuffer)
  .resize(1024, 1024)
  .png()
  .toFile(path.join(__dirname, '../assets/adaptive-icon.png'))
  .then(() => console.log('Generated adaptive-icon.png'))
  .catch(err => console.error('Error generating adaptive-icon.png:', err));

// Generate splash screen
sharp(svgBuffer)
  .resize(1242, 2436)
  .png()
  .toFile(path.join(__dirname, '../assets/splash.png'))
  .then(() => console.log('Generated splash.png'))
  .catch(err => console.error('Error generating splash.png:', err)); 