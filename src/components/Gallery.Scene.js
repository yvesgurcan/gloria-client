import React from 'react';
import { Canvas } from 'react-three-fiber';

import Controls from '../components/Gallery.Controls';

export default ({ orientationPermission, localHost }) => {
    return (
        <Canvas>
            <Controls
                orientationPermission={orientationPermission}
                localHost={localHost}
            />
        </Canvas>
    );
};
