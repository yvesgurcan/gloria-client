import React from 'react';

export default ({
    color = 'rgb(200, 200, 200)',
    position = [0, 0, 0],
    dimension = [0, 0, 0],
    ...props
}) => {
    return (
        <mesh position={position} {...props}>
            <boxBufferGeometry attach="geometry" args={dimension} />
            <meshPhongMaterial
                attach="material"
                color="rgb(35, 35, 35)"
                roughness={0.5}
                opacity={1}
                transparent={false}
            />
        </mesh>
    );
};
