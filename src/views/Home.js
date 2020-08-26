import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Vector3 } from 'three';

import GlobalStyles from '../components/GlobalStyles';
import Controls from '../components/Controls';
import ControlsLimited from '../components/ControlsLimited';

import DomeWalls from '../components/DomeWalls';
import Pedestal from '../components/Pedestal';
import ScreenSupport from '../components/ScreenSupport';
import Screen from '../components/Screen';
import DomeFloor from '../components/DomeFloor';

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
    function isLocalHost() {
        return location.hostname === 'localhost';
    }

    return (
        <span>
            <GlobalStyles />
            <Canvas shadowMap>
                <Camera position={[4, 0, 0]} />
                {isLocalHost() ? <Controls /> : <ControlsLimited />}
                <ambientLight intensity={0.85} />
                <spotLight
                    color="white"
                    intensity={0.5}
                    position={[-20, 20, -5]}
                />
                <directionalLight
                    color="white"
                    intensity={0.1}
                    position={[-2, 9, 0]}
                />
                <directionalLight
                    color="white"
                    intensity={0.2}
                    position={[7, -3, -5]}
                />
                <directionalLight
                    color="white"
                    intensity={0.1}
                    position={[10, 6, 5]}
                />
                <Pedestal />
                <ScreenSupport
                    position={[1.75, 0, 2]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, Math.PI / 4, 0]}
                />
                {/*<Screen
                    position={[1.8, 0, 1.95]}
                    dimension={[0, 1, 0.6]}
                    rotation={[0, Math.PI / 4, 0]}
                />*/}
                <ScreenSupport
                    position={[1.75, 0, -2]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, -Math.PI / 4, 0]}
                />
                {/*<Screen
                    position={[1.8, 0, -1.95]}
                    dimension={[0, 1, 0.6]}
                    rotation={[0, -Math.PI / 4, 0]}
                />*/}
                <ScreenSupport
                    position={[-2, 0, -1.5]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, -Math.PI / 8, 0]}
                />
                <ScreenSupport
                    position={[-2, 0, 1.5]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, Math.PI / 8, 0]}
                />
                <DomeFloor />
                <DomeWalls />
            </Canvas>
        </span>
    );
};
