import React from 'react';
import Model from './Zone.Model';

export default () => (
    <Model
        to="/arcade"
        modelPath="tf7/pong_arcade_cabin/scene.gltf"
        position={[1, 0.5, 3]}
        rotation={[0, 1.8, 0]}
        scale={0.0008}
    />
);
