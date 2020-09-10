import React from 'react';
import { Canvas } from 'react-three-fiber';

import Camera from './Shared.Camera';
import Controls from '../components/Gallery.Controls';
import Skybox from '../components/Gallery.Skybox';
import GalleryImage from '../components/Gallery.Image';

const IMAGES = ['WW84-06258'];

export default ({ orientationPermission, localHost }) => {
    return (
        <Canvas>
            <Camera position={[0, 0, 0]} />
            <Controls
                orientationPermission={orientationPermission}
                localHost={localHost}
            />
            {IMAGES.map(image => (
                <GalleryImage
                    key={image}
                    partialPath={`bts/images/${image}.jpg`}
                />
            ))}
            <Skybox />
        </Canvas>
    );
};
