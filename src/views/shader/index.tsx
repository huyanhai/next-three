import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Sky } from '@react-three/drei';
import Screen from './Screen';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Screen1 from './Screen1';

const Shader = () => {
  return (
    <div className="w-screen h-screen bg-slate-600">
      <Canvas camera={{ position: [0, 0, 30], fov: 20 }}>
        <Environment files={'studio_small_09_4k.exr'} />
        {/* <Sky /> */}
        <OrbitControls />
        <color attach="background" args={['#15151a']} />
        <EffectComposer>
          {/* 模糊效果 */}
          <Bloom
            mipmapBlur
            luminanceSmoothing={0}
            luminanceThreshold={0.1}
            intensity={1.42}
            radius={0.72}
          />
        </EffectComposer>
        {/* <Screen /> */}
        <Screen1 />
      </Canvas>
    </div>
  );
};

export default Shader;
