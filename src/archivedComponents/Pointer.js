import React from 'react';

export default ({
    to = '/',
    x = 0,
    y = 0,
    z = 0,
    color = 'rgb(150, 150, 150)',
    ...props
}) => {
    return (
        <mesh
            onClick={() => window.appHistory.push(to)}
            onPointerUp={() => window.appHistory.push(to)}
            position={[0 + x, 0 + y, 0 + z]}
            {...props}
        >
            <coneBufferGeometry attach="geometry" args={[2, -5, 2]} />
            <shaderMaterial
                attach="material"
                color={color}
                roughness={0.3}
                uniforms={{ texture: { value: 'somevalue' } }}
            />
        </mesh>
    );
};
