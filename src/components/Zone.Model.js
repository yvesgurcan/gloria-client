import React, { Suspense, useEffect } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const DEFAULT_ROTATION = [0, Math.PI / 2, 0];
const DEFAULT_SCALE = 1;

function Model({
    modelPath,
    position,
    to = '',
    rotation = DEFAULT_ROTATION,
    scale = DEFAULT_SCALE
}) {
    const model = useLoader(GLTFLoader, 'public/' + modelPath);

    return (
        <mesh
            rotation={rotation}
            onClick={() => to && window.appHistory.push(to)}
            onPointerUp={() => to && window.appHistory.push(to)}
            scale={[scale, scale, scale]}
            position={position}
        >
            <primitive object={model.scene} />
        </mesh>
    );
}

export default ({ suspense = true, ...props }) =>
    suspense ? (
        <Suspense fallback={null}>
            <Model {...props} />
        </Suspense>
    ) : (
        <Model {...props} />
    );
