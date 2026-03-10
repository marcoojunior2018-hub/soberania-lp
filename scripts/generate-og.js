import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOG() {
  const width = 1200;
  const height = 630;
  
  const inputPath = path.join(__dirname, '../client/public/foto-sessao-hero.webp');
  const fallbackPath = path.join(__dirname, '../client/public/marco-hero.jpg');
  const outputPath = path.join(__dirname, '../client/public/og-image.jpg');

  console.log('Generating OG Image...');
  
  // Try webp first, fallback to jpg
  let baseImage;
  try {
     baseImage = sharp(inputPath);
     await baseImage.metadata();
  } catch (e) {
     baseImage = sharp(fallbackPath);
  }

  const svgText = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0F1117;stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:#0A0B10;stop-opacity:0.95" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#F2F2F2;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#C7CEDB;stop-opacity:0.9" />
        </linearGradient>
      </defs>
      
      <!-- Dark overlay -->
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#grad)" />
      
      <!-- Top Accent Line -->
      <rect x="0" y="0" width="${width}" height="6" fill="#8B5CF6" />

      <!-- Chip / Kicker -->
      <rect x="80" y="240" width="230" height="32" rx="4" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.3)" stroke-width="1" />
      <text x="96" y="260" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#8B5CF6" letter-spacing="2">
        ENGENHARIA DE VENDAS
      </text>
      
      <!-- Main Text -->
      <text x="80" y="340" font-family="Manrope, Inter, sans-serif" font-size="64" font-weight="800" fill="#F2F2F2" letter-spacing="-1">
        Estruture sua captação
      </text>
      <text x="80" y="420" font-family="Manrope, Inter, sans-serif" font-size="64" font-weight="800" fill="#F2F2F2" letter-spacing="-1">
        no Google
      </text>

      <!-- Subtext -->
      <text x="80" y="480" font-family="Inter, sans-serif" font-size="24" font-weight="400" fill="rgba(199,206,219,0.8)">
        Pare de depender de portais, indicação e improviso.
      </text>
      
      <!-- Logo / Branding bottom -->
      <text x="80" y="550" font-family="Manrope, sans-serif" font-size="20" font-weight="700" fill="#F2F2F2" letter-spacing="-0.5">
        MARCO ANTONIO
      </text>
      <circle cx="260" cy="544" r="3" fill="rgba(199,206,219,0.3)" />
      <text x="280" y="549" font-family="Inter, sans-serif" font-size="16" font-weight="400" fill="rgba(199,206,219,0.6)">
        soberania.ag
      </text>
    </svg>
  `;

  await baseImage
    .resize(width, height, {
      fit: 'cover',
      position: 'right top' // Keeps the right side (where the face is usually positioned)
    })
    .composite([
      {
        input: Buffer.from(svgText),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(outputPath);
    
  console.log('OG Image successfully created at:', outputPath);
}

generateOG().catch(console.error);
