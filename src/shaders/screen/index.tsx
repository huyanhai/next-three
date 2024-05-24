import vertexShader from './glsl/vertexShader.vert?raw';
import fragmentShader from './glsl/fragmentShader.frag?raw';
import { resolveLygia } from 'resolve-lygia';
import { shaderMaterial } from '@react-three/drei';
import { Color, DoubleSide, Texture } from 'three';

const ScreenShader = shaderMaterial(
  {
    uTime: 0,
    uAlpha: 0,
    uColor: new Color(0x000000),
    uTexture: new Texture(),
    uTexture1: new Texture(),
    uProgression: 0,
    uStep: 0,
    // 开启透明显示
    transparent: false,
    side: DoubleSide
  },
  resolveLygia(vertexShader),
  resolveLygia(fragmentShader)
);

export default ScreenShader;
