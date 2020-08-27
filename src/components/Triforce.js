import React, { Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Triforce({ to = '/triforce' }) {
    const model = useLoader(
        GLTFLoader,
        'https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf'
    );

    // This model is huuuuuuge!
    model.scene.scale.set(0.007, 0.007, 0.007);

    return (
        <mesh
            rotation={[0, Math.PI / 2, 0]}
            onClick={() => window.appHistory.push(to)}
            onPointerUp={() => window.appHistory.push(to)}
        >
            <primitive object={model.scene} position={[0, 0, 0.5]} />
        </mesh>
    );
}

export default () => (
    <Suspense fallback={null}>
        <Triforce />
    </Suspense>
);
