import * as THREE from 'three';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }: { isMobile: boolean, children: React.ReactNode }) => {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 22], 0.25, delta);

    if (!isMobile) {
      if (group.current) {
        easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
      }
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;