import React from 'react';

export default () => {
    return (
        <mesh position={[0, 0, 0]}>
            <cylinderGeometry attach="geometry" args={[1, 1, 1, 300]} />
            <meshPhongMaterial
                attach="material"
                color="rgb(50, 50, 50)"
                roughness={0.5}
                opacity={1}
                transparent={false}
            />
        </mesh>
    );
};
