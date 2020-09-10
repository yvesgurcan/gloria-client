import React from 'react';

import Model from './Zone.Model';
import Pedestal from './Zone.Pedestal';

export default () => (
    <group>
        <Model
            to="/hat"
            modelPath="tf7/weathered_pith_hat/scene.gltf"
            position={[-2.1, 0, 2.1]}
            scale={0.005}
        />
        <Pedestal position={[2.1, -0.3, 2.1]} />
    </group>
);
