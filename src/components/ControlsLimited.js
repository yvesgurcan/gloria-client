import React from 'react';

import Controls from './Controls';

export default () => (
    <Controls
        enableZoom={false}
        keys={{
            LEFT: 37, //left arrow
            RIGHT: 39 // right arrow
        }}
        minAzimuthAngle={Math.PI}
        maxAzimuthAngle={0}
        minPolarAngle={Math.PI / 2.3}
        maxPolarAngle={Math.PI / 1.5}
    />
);
