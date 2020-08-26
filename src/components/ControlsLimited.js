import React from 'react';

import Controls from './Controls';

export default () => (
    <Controls
        enableZoom={false}
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
    />
);
