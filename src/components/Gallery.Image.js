import React from 'react';
import { TextureLoader, DoubleSide } from 'three';

export default ({
    position = [0.5, 0.5, 0],
    dimension = [1, 1, 1, 1],
    partialPath = '',
    ...props
}) => {
    const texture = new TextureLoader().load(`public/${partialPath}`);
    return (
        <>
            <mesh {...props} onClick={() => console.log('click')}>
                <planeGeometry attach="geometry" args={dimension} />
                <meshBasicMaterial
                    attach="material"
                    map={texture}
                    side={DoubleSide}
                />
            </mesh>
        </>
    );
};
