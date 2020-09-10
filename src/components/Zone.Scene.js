import React, { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';

import isLocalHost from '../util/localHost';
import Camera from './Shared.Camera';
import Controls from './Zone.Controls';
import Skybox from './Zone.Skybox';
import StaticLights from './Zone.StaticLights';
import OrbitingLights from './Zone.OrbitingLights';
import Border from './Zone.Border';
import Floor from './Zone.Floor';
import VideoScreens from './Zone.VideoScreens';
import Hat from './Zone.Hat';
import Statue from './Zone.Statue';
import Arcade from './Zone.Arcade';
import Kiosks from './Zone.Kiosks';

export default () => {
    const [localHost, setLocalHost] = useState(false);
    useEffect(() => setLocalHost(isLocalHost(), []));
    return (
        <Canvas>
            <Camera position={[0, 0, 0]} />
            <Controls localHost={localHost} />
            <group position={[4, 0, 0]} rotation={[0, -Math.PI, 0]}>
                <Skybox />
                <StaticLights />
                <OrbitingLights />
                <Floor />
                <Border />
                <Kiosks />
                <VideoScreens />
                <Statue />
                <Arcade />
                <Hat />
            </group>
        </Canvas>
    );
};
