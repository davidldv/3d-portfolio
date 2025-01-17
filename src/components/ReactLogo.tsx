import { Float, useGLTF } from '@react-three/drei';

import { FC } from 'react';

interface ReactLogoProps {
  [key: string]: any;
}

const ReactLogo: FC<ReactLogoProps> = (props) => {
  const { nodes, materials }: any = useGLTF('models/react.glb');

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.546, 0.546, 0.546]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;