const fs = require('fs');
const sharp = require('sharp');

// Exact ratios from favicon.ico:
function generateSvg({ color = '#FFFFFF', tedColor = '#EB0028' } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 82" width="490" height="82" fill="none">
  <defs>
    <style>
      .ted-text {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Arial Black", Arial, sans-serif;
        font-weight: 900;
        fill: ${tedColor};
      }
      .ted-x {
        font-size: 56px;
        font-weight: 900;
      }
      .svit-text {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        font-weight: 400;
        fill: ${color};
        letter-spacing: 0.05em;
      }
    </style>
  </defs>
  <text x="0" y="70" class="ted-text" font-size="86">TED<tspan class="ted-x" dy="-26">x</tspan></text>
  <text x="231" y="70" class="svit-text" font-size="86">SVIT</text>
</svg>`;
}

function generateTedxOnlySvg({ tedColor = '#EB0028' } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 82" width="252" height="82" fill="none">
  <defs>
    <style>
      .ted-text {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Arial Black", Arial, sans-serif;
        font-weight: 900;
        fill: ${tedColor};
      }
      .ted-x {
        font-size: 56px;
        font-weight: 900;
      }
    </style>
  </defs>
  <text x="0" y="70" class="ted-text" font-size="86">TED<tspan class="ted-x" dy="-26">x</tspan></text>
</svg>`;
}

const logoSvg = generateSvg();
const tedxSvg = generateTedxOnlySvg();

fs.writeFileSync('public/brand/logo.svg', logoSvg);
fs.writeFileSync('public/brand/footer-logo.svg', logoSvg);
fs.writeFileSync('public/brand/tedx-mark.svg', tedxSvg);

async function buildAssets() {
  // High-res logo (980 x 164)
  await sharp(Buffer.from(logoSvg))
    .resize(980, 164)
    .png()
    .toFile('public/brand/logo.png');

  fs.copyFileSync('public/brand/logo.png', 'public/brand/footer-logo.png');

  // High-res tedx-mark (504 x 164)
  await sharp(Buffer.from(tedxSvg))
    .resize(504, 164)
    .png()
    .toFile('public/brand/tedx-mark.png');

  console.log('All brand assets successfully built: logo.svg, logo.png, footer-logo.svg, footer-logo.png, tedx-mark.svg, tedx-mark.png');
}

buildAssets().catch(console.error);
