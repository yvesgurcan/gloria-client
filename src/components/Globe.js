import React from 'react';

export default () => {
    return (
        <mesh>
            <sphereGeometry attach="geometry" args={[5, 100, 100]} />
            <meshStandardMaterial
                attach="material"
                color="rgb(0, 168, 224)"
                roughness={1}
                metalness={0.3}
            />
        </mesh>
    );
};
