import { TextureLoader, WebGLCubeRenderTarget } from 'three';
import { useThree } from 'react-three-fiber';

export default ({ partialPath }) => {
    const { gl, scene } = useThree();
    const texture = new TextureLoader().load(
        `public/skyboxes/${partialPath}`,
        () => {
            const renderTarget = new WebGLCubeRenderTarget(
                texture.image.height
            );
            renderTarget.fromEquirectangularTexture(gl, texture);
            scene.background = renderTarget;
        }
    );

    return null;
};
