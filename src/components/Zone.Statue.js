import React, { Suspense } from 'react';
import Model from './Zone.Model';
import Pedestal from './Zone.Pedestal';

export default () => (
    <group>
        <Suspense fallback={null}>
            <Model
                suspense={false}
                modelPath="tf7/wings.glb"
                position={[0.3, -0.2, -0.1]}
            />
            <Model
                suspense={false}
                to="/wings"
                modelPath="tf7/att_pg_manniTest_low.glb"
                position={[0, -0.23, -0.06]}
            />
        </Suspense>
        <Pedestal position={[0, -0.35, 0]} />
    </group>
);
