import React from 'react';
import { Canvas } from 'react-three-fiber';

import Controls from '../components/Gallery.Controls';
import Skybox from '../components/Gallery.Skybox';
import GalleryImage from '../components/Gallery.Image';

const IMAGES = ['test'];

export default ({ orientationPermission, localHost }) => {
    return (
        <Canvas>
            <Controls
                orientationPermission={orientationPermission}
                localHost={localHost}
            />
            {IMAGES.map(image => (
                <GalleryImage />
            ))}
            <Skybox />
        </Canvas>
    );
};
