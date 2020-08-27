import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Canvas, useFrame, useThree } from 'react-three-fiber';

import Controls from '../components/Controls';
import MenuOverlay from '../components/MenuOverlay';
import MenuContent from '../components/MenuContent';
import Triforce2 from '../components/Triforce2';

function Camera(props) {
    const ref = useRef();
    const { setDefaultCamera } = useThree();
    // Make the camera known to the system
    useEffect(() => setDefaultCamera(ref.current), []);
    // Update it every frame
    useFrame(() => ref.current.updateMatrixWorld());
    return <perspectiveCamera ref={ref} {...props} />;
}

export default ({ display }) => {
    return (
        <HideAndSeek displayRoom={display}>
            <MenuOverlay>
                <MenuContent backgroundColor="rgb(0, 168, 224, 0.75)">
                    <Link to="/">Back</Link>
                    <Canvas>
                        <Camera position={[-0.85, 0.5, -0.5]} />
                        <Controls autoRotate target={[0, 0.1, 0]} />
                        <directionalLight
                            color="white"
                            intensity={1}
                            position={[-1, -1, 0]}
                        />
                        <directionalLight
                            color="white"
                            intensity={0.85}
                            position={[-1, -1, 0]}
                        />
                        <directionalLight
                            color="white"
                            intensity={1}
                            position={[1, 1, 0]}
                        />
                        <directionalLight
                            color="white"
                            intensity={1}
                            position={[1, 1, 1]}
                        />
                        <directionalLight
                            color="white"
                            intensity={0.8}
                            position={[1, -5, 1]}
                        />
                        <Triforce2 />
                    </Canvas>
                </MenuContent>
            </MenuOverlay>
        </HideAndSeek>
    );
};

const HideAndSeek = styled.div`
    display: ${props => (props.displayRoom ? 'block' : 'none')};
`;
