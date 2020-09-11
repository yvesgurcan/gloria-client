import React from 'react';

import Model from './Zone.Model';
import Pedestal from './Zone.Pedestal';

const X = 2.1;
const Y = 2.1;

export default () => (
    <group>
        <Model
            to="/hat"
            modelPath="tf7/weathered_pith_hat/scene.gltf"
            position={[X, 0, Y]}
            scale={0.005}
        />
        <Pedestal position={[Y, -0.3, X]} />
    </group>
);
