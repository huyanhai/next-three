'use client';
import React, { useEffect, useRef, useState } from 'react';
import vertexShader from '@/glsl/vertexShader.vert';
import fragmentShader from '@/glsl/fragmentShader.frag';
import { useFrame, useLoader } from '@react-three/fiber';
import { Vector2, Vector3 } from 'three';
import { useTexture, Html } from '@react-three/drei';
import { useMouse } from 'ahooks';
import { resolveLygia } from 'resolve-lygia';

const Shader = (props: any) => {
  const texture = useTexture(['p3.jpg']);

  const {
    strength,
    updateStrength,
    start,
    end,
    roughness,
    thickness,
    light,
    check
  } = props;
  // 导入贴图

  const shaderRef = useRef<any>();

  const [color1, setColor1] = useState<Vector3>(new Vector3(1.0, 0.0, 0.0));
  const [color2, setColor2] = useState<Vector3>(new Vector3(2.0, 0.0, 0.0));

  const [camera, setCamera] = useState<Vector3>(new Vector3());
  const [time, setTime] = useState(0);
  const [speed] = useState(Math.random());
  const [screen, setScreen] = useState<Vector2>(new Vector2(0, 0));
  const [mousePosition, setMousePosition] = useState<Vector2>(
    new Vector2(0, 0)
  );

  useEffect(() => {
    setTime(0);

    setColor1(new Vector3(Math.random(), Math.random(), Math.random()));
    setColor2(color1);
  }, [check]);

  useFrame((state, delta) => {
    // setTime(state.clock.getElapsedTime());

    setTime(time + delta);
    setScreen(new Vector2(state.size.width, state.size.height));
    setMousePosition(
      new Vector2(state.mouse.x / 2 + 0.5, state.mouse.y / 2 + 0.5)
    );
    setCamera(state.camera.position);
    updateStrength(strength - 0.4);
  });

  return (
    <>
      <shaderMaterial
        wireframe={false}
        ref={shaderRef}
        args={[
          {
            uniforms: {
              u_time: { value: time },
              u_resolution: { value: screen },
              u_dpi: { value: window.devicePixelRatio },
              u_mouse: { value: mousePosition },
              u_strength: { value: strength },
              u_textures: { value: texture[0] },
              u_start: { value: start },
              u_end: { value: end },
              u_lightPosition: { value: light.current?.position },
              u_lightColor: { value: light.current?.color },
              u_camera: { value: camera },
              u_speed: { value: speed },
              u_roughness: { value: roughness },
              u_thickness: { value: thickness },
              u_color1: { value: color1 },
              u_color2: { value: color2 }
            },
            fragmentShader: resolveLygia(fragmentShader),
            vertexShader: resolveLygia(vertexShader)
            // lights: true, // 启用光照计算
          }
        ]}
      />
    </>
  );
};

// useTexture.preload('');
export default Shader;
