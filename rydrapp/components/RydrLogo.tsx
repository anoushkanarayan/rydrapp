import { SvgXml } from 'react-native-svg';

const logoXml = `
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="1" />
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="1" />
    </linearGradient>
  </defs>
  <text x="0" y="65" font-family="Arial, sans-serif" font-size="56" font-weight="900" text-anchor="start" fill="url(#gradient2)" letter-spacing="-2px">RYDR</text>
</svg>
`;

export default function RydrLogo({ width = 200, height = 67 }) {
  return <SvgXml xml={logoXml} width={width} height={height} />;
} 