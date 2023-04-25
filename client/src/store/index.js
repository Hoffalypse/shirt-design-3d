
import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#389898',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo-no-bg.png',
  fullDecal: './full.png',
});

export default state;