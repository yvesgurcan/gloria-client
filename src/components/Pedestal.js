import React from 'react';

export default () => {
    return (
        <mesh position={[0, -0.25, 0]}>
            <cylinderGeometry attach="geometry" args={[0.5, 0.5, 0.5, 100]} />
            <meshPhongMaterial
                attach="material"
                color="rgb(40, 40, 40)"
                roughness={0.5}
                opacity={1}
                transparent={false}
            />
        </mesh>
    );
};
