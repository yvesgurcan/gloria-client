import React, { Suspense, useRef } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Triforce() {
    const meshReference = useRef();

    let model = null;
    model = useLoader(
        GLTFLoader,
        'https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf'
    );

    // This model is huuuuuuge!
    model.scene.scale.set(0.007, 0.007, 0.007);

    useFrame(() => {
        meshReference.current.rotation.x += 1;
    });

    return (
        <mesh ref={meshReference} rotation={[0, Math.PI / 2, 0]}>
            <primitive object={model.scene} position={[0, 0, 0]} />
        </mesh>
    );
}

export default () => (
    <Suspense fallback={null}>
        <Triforce />
    </Suspense>
);
