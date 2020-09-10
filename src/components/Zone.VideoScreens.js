import React from 'react';

import VideoScreen from './Zone.VideoScreen';

export default () => (
    <group>
        <VideoScreen
            position={[1.4, 0.3, 1.4]}
            dimension={[0.9, 1.6, 1, 1]}
            rotation={[0, -Math.PI / 4, 0]}
        />
        <VideoScreen
            position={[1.4, 0.3, -1.4]}
            dimension={[0.9, 1.6, 1, 1]}
            rotation={[0, Math.PI / 4, 0]}
        />
    </group>
);
