import React from 'react';
import { CubeTextureLoader } from 'three';
import { useThree } from 'react-three-fiber';

export default () => {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
        'public/space-skybox/1.jpg',
        'public/space-skybox/2.jpg',
        'public/space-skybox/3.jpg',
        'public/space-skybox/4.jpg',
        'public/space-skybox/5.jpg',
        'public/space-skybox/6.jpg'
    ]);
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
};
