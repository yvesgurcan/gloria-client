import React, { Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3 } from 'three';

function Triforce() {
    const model = useLoader(
        GLTFLoader,
        'https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf'
    );

    console.log({ model });

    // This model is huuuuuuge!
    model.scene.scale.set(0.007, 0.007, 0.007);

    return (
        <mesh rotation={[0, Math.PI / 2, 0]}>
            <primitive object={model.scene} position={[0, 0, 0.5]} />
        </mesh>
    );
}

export default () => (
    <Suspense fallback={null}>
        <Triforce />
    </Suspense>
);
