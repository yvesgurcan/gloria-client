import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';

import GlobalStyles from '../components/GlobalStyles';
import Controls from '../components/Controls';
import ControlsLimited from '../components/ControlsLimited';

import DomeWalls from '../components/DomeWalls';
import Pedestal from '../components/Pedestal';
import ScreenSupport from '../components/ScreenSupport';
import DomeFloor from '../components/DomeFloor';

export default () => {
    function isLocalHost() {
        return location.hostname === 'localhost';
    }

    return (
        <span>
            <GlobalStyles />
            <Canvas
                shadowMap
                camera={{
                    position: new Vector3(5, 1, 0)
                }}
            >
                {isLocalHost() ? <Controls /> : <ControlsLimited />}
                <ambientLight intensity={0.85} />
                <directionalLight
                    color="rgb(220, 220, 100)"
                    intensity={0.3}
                    position={[-2, 9, 0]}
                />
                <directionalLight
                    color="rgb(220, 220, 100)"
                    intensity={0.2}
                    position={[7, -3, -5]}
                />
                <directionalLight
                    color="rgb(220, 220, 100)"
                    intensity={0.1}
                    position={[10, 6, 5]}
                />
                <Pedestal />
                <ScreenSupport
                    position={[1.75, 0, 2]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, Math.PI / 4, 0]}
                />
                <ScreenSupport
                    position={[1.75, 0, -2]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, -Math.PI / 4, 0]}
                />
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
