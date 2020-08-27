import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame, useThree } from 'react-three-fiber';

import Controls from '../components/Controls';
import MenuOverlay from '../components/MenuOverlay';
import MenuContent from '../components/MenuContent';
import Triforce2 from '../components/Triforce2';

function Camera(props) {
    const ref = useRef();
    const { setDefaultCamera } = useThree();
    // Make the camera known to the system
    useEffect(() => setDefaultCamera(ref.current), []);
    // Update it every frame
    useFrame(() => ref.current.updateMatrixWorld());
    return <perspectiveCamera ref={ref} {...props} />;
}

export default () => {
    return (
        <MenuOverlay>
            <MenuContent backgroundColor="rgb(0, 168, 224, 0.75)">
                <Link to="/">Back</Link>
                <Canvas>
                    <Camera position={[-0.9, 0, 0]} />
                    <Controls autoRotate target={[0, 0, 0]} />
                    <Triforce2 />
                </Canvas>
            </MenuContent>
        </MenuOverlay>
    );
};
