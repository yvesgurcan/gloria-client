import React, { useRef } from 'react';
import { TextureLoader, DoubleSide } from 'three';
import { useFrame } from 'react-three-fiber';

export default ({
    position = [0, 0, 0],
    dimension = [1, 1, 1, 1],
    rotation = [0, 0, 0],
    partialPath = '',
    to = '/',
    ...props
}) => {
    const texture = new TextureLoader().load(`public/${partialPath}`);

    function pushHistory() {
        if (!to) {
            return;
        }

        window.appHistory.push(to);
    }

    const reference = useRef();

    useFrame(() => {
        if (reference.current) {
            // reference.current.rotation.x += 0.02;
            // reference.current.rotation.y += 0.02;
            // reference.current.rotation.z += 0.02;
        }
    });

    return (
        <group>
            <mesh
                position={position}
                ref={reference}
                rotation={rotation}
                {...props}
                onClick={pushHistory}
                onPointerUp={pushHistory}
            >
                <planeGeometry attach="geometry" args={dimension} />
                <meshBasicMaterial
                    attach="material"
                    map={texture}
                    side={DoubleSide}
                />
            </mesh>
        </group>
    );
};
