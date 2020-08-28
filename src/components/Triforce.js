import React, { Suspense, useRef } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FRAME_ANIMATION_DURATION = 200;

function Triforce({ to = '/triforce' }) {
    const frameCount = useRef(0);

    const model = useLoader(
        GLTFLoader,
        'https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf'
    );

    // This model is huuuuuuge!
    model.scene.scale.set(0.007, 0.007, 0.007);

    useFrame(() => {
        model.scene.rotation.y += 0.02;

        // Moves the triforce up and down based on the number of the
        if (frameCount.current === 0) {
            frameCount.current = FRAME_ANIMATION_DURATION;
        } else {
            if (frameCount.current > FRAME_ANIMATION_DURATION / 2) {
                model.scene.position.y =
                    model.scene.position.y - FRAME_ANIMATION_DURATION / 300000;
            } else {
                model.scene.position.y =
                    model.scene.position.y + FRAME_ANIMATION_DURATION / 300000;
            }

            frameCount.current = frameCount.current - 1;
        }
    });

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
