import React from 'react';
import Model from './Zone.Model';
import Pedestal from './Zone.Pedestal';

export default () => (
    <group>
        <Model modelPath="tf7/wings.glb" position={[0.06, -0.3, 0.7]} />
        <Model
            to="/wings"
            modelPath="tf7/att_pg_manniTest_low.glb"
            position={[0.05, -0.23, 0.5]}
        />
        <Pedestal position={[0.5, -0.35, 0]} />
    </group>
);
