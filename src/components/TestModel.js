import React, { Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const DEFAULT_ROTATION = [0, Math.PI / 2, 0]
const DEFAULT_SCALE = 1

function TestModel({ modelPath, position, to = '', rotation = DEFAULT_ROTATION, scale = DEFAULT_SCALE }) {
    const model = useLoader(GLTFLoader, 'public/' + modelPath);

    React.useEffect(() => {
        model.scene.scale.set(scale, scale, scale);
    }, [model]);

    const handleSelection = () => {
        if (to) {
            window.appHistory.push(to)
        }
    }

    return (
        <mesh
            rotation={rotation}
            onClick={handleSelection}
            onPointerUp={handleSelection}
        >
            <primitive object={model.scene} position={position} />
        </mesh>
    );
}

export default props => (
    <Suspense fallback={null}>
        <TestModel {...props} />
    </Suspense>
);
