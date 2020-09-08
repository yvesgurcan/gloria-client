import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from 'react-three-fiber';

import Skybox from '../components/Skybox';
import ScreenMask from '../components/ScreenMask';
import Camera from '../components/Camera';
import Controls from '../components/Controls';
import DomeWalls from '../components/DomeWalls';
import Pedestal from '../components/Pedestal';
import TestModel from '../components/TestModel';
import Kiosk from '../components/Kiosk';
import DomeFloor from '../components/DomeFloor';
import OrbitingLights from '../components/OrbitingLights';

const KIOSK_SIZE = [0.1, 1.7, 0.9];

export default ({ io }) => {
    const [localHost, setLocalHost] = useState(false);
    const [loading, setLoading] = useState(true);
    const [orientationPermission, setOrientationPermission] = useState();

    useEffect(() => {
        function isLocalHost() {
            if (location.hostname === 'localhost') {
                console.info('This is localhost.');
                return true;
            }

            console.info('This is not localhost.');
            return false;
        }

        function getOrientationPermissionFromLocalStorage() {
            const storageOrientationPermission = localStorage.getItem(
                '3d-dome-orientationPermission'
            );
            if (storageOrientationPermission) {
                setOrientationPermission(storageOrientationPermission);
            }
        }

        setLocalHost(isLocalHost());
        getOrientationPermissionFromLocalStorage();
        setLoading(false);
    }, []);

    async function requestOrientationPermission() {
        try {
            if (localHost) {
                console.error(
                    'Device orientation permissions can not be set on localhost (not secure). Sorry!'
                );
            }

            // Android devices don't use requestPermission()
            if (
                typeof DeviceOrientationEvent.requestPermission !== 'function'
            ) {
                const userAgent = navigator.userAgent.toLowerCase();
                if (userAgent.includes('android')) {
                    console.info(
                        'Android device detected. Permission granted by default.'
                    );
                    setOrientationPermission('granted');
                    return;
                }
            }

            const permission = await DeviceOrientationEvent.requestPermission();
            console.info({ permission });
            setOrientationPermission(permission);
            localStorage.setItem('3d-dome-orientationPermission', permission);
        } catch (error) {
            console.error(
                'An error occurred while setting device orientation permission. Permission denied.'
            );
            console.error(error);
            setOrientationPermission('denied');
            localStorage.setItem('3d-dome-orientationPermission', 'denied');
        }
    }

    if (loading) {
        return <ScreenMask>Loading...</ScreenMask>;
    }

    if (!orientationPermission) {
        return (
            <ScreenMask>
                <button onClick={requestOrientationPermission}>
                    Enable access device orientation
                </button>
            </ScreenMask>
        );
    }

    return (
        <Canvas>
            <Camera position={[0, 0, 0]} />
            <Controls
                orientationPermission={orientationPermission}
                localHost={localHost}
            />
            <group position={[4, 0, 0]} rotation={[0, -Math.PI, 0]}>
                <ambientLight intensity={0.85} />
                <OrbitingLights />
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
                    intensity={0.2}
                    position={[10, 6, 5]}
                />
                <Skybox />
                <DomeFloor />
                <DomeWalls />
                <Kiosk
                    video={1}
                    position={[1.25, 0.3, 1.5]}
                    dimension={KIOSK_SIZE}
                    rotation={[0, Math.PI / 4, 0]}
                />
                <Kiosk
                    video={2}
                    position={[1.25, 0.3, -1.5]}
                    dimension={KIOSK_SIZE}
                    rotation={[0, -Math.PI / 4, 0]}
                />
                <Kiosk
                    to={`/kiosk3`}
                    position={[-1.5, 0.3, -1.25]}
                    dimension={KIOSK_SIZE}
                    rotation={[0, -Math.PI / 8, 0]}
                />
                <Kiosk
                    to={`/kiosk4`}
                    position={[-1.5, 0.3, 1.25]}
                    dimension={KIOSK_SIZE}
                    rotation={[0, Math.PI / 8, 0]}
                />
                <TestModel
                    modelPath="tf7/wings.glb"
                    position={[0.06, -0.3, 0.7]}
                />
                <Pedestal position={[0.5, -0.35, 0]} />
                <TestModel
                    to="/hat"
                    modelPath="tf7/att_pg_manniTest_low.glb"
                    position={[0.05, -0.23, 0.5]}
                />
                <Pedestal position={[2.1, -0.3, 2.1]} />
                <TestModel
                    modelPath="tf7/pong_arcade_cabin/scene.gltf"
                    position={[1, 0.5, 3]}
                    rotation={[0, 1.8, 0]}
                    scale={0.0008}
                />
                <TestModel
                    to="/hat"
                    modelPath="tf7/weathered_pith_hat/scene.gltf"
                    position={[-2.1, 0, 2.1]}
                    scale={0.005}
                />
            </group>
        </Canvas>
    );
};
