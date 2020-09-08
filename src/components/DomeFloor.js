import React from 'react';
import * as Three from 'three';

export default () => {
    return (
        <mesh position={[0, -0.5001, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry attach="geometry" args={[6, 32]} />
            <meshPhongMaterial
                attach="material"
                color="rgb(20, 20, 20)"
                metalness={0}
                specular={0x1a1a1a}
                shininess={0}
                side={Three.DoubleSide}
            />
        </mesh>
    );
};
