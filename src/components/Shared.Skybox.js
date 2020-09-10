import React from 'react';
import { TextureLoader, WebGLCubeRenderTarget } from 'three';
import { useThree } from 'react-three-fiber';

export default ({ partialPath }) => {
    const { gl, scene } = useThree();
    const loader = new TextureLoader();
    const texture = loader.load(`public/skyboxes/${partialPath}`, () => {
        const rt = new WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(gl, texture);
        scene.background = rt;
    });
    return null;
};
