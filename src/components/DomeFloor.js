import React from 'react';

export default () => {
    return (
        <mesh position={[0, -1, 0]}>
            <boxBufferGeometry attach="geometry" args={[10, 1, 10]} />
            <meshStandardMaterial
                attach="material"
                color="rgb(0, 168, 224)"
                roughness={1}
                metalness={0.3}
            />
        </mesh>
    );
};
