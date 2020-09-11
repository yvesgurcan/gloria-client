import React from 'react';
import { Route } from 'react-router';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';

import Camera from './Gallery.Camera';
import Controls from './Gallery.Controls';
import Skybox from './Gallery.Skybox';
import GalleryImage from './Gallery.Image';
import Back from './Shared.Back';

const IMAGES = [
    'WW84-06258',
    'WW84-07919r',
    'WW84-10720',
    'WW84-11557r',
    'WW84-14164rv2',
    'WW84-18941',
    'WW84-19000',
    'WW84-19085'
];

const FACES = 8;

const getRotationX = index => {
    const angle = ((Math.PI * 2) / FACES) * (index % FACES);

    switch (index) {
        default: {
            return angle;
        }
        case 1: {
            return -angle;
        }
        case 3: {
            return -angle;
        }
        case 5: {
            return -angle;
        }
        case 7: {
            return -angle;
        }
    }
};

const getPositionX = index => {
    switch (index) {
        case 0: {
            return 0;
        }
        case 1: {
            return 0.75;
        }
        case 2: {
            return 1.05;
        }
        case 3: {
            return 0.75;
        }
        case 4: {
            return 0;
        }
        case 5: {
            return -0.75;
        }
        case 6: {
            return -1.05;
        }
        case 7: {
            return -0.75;
        }
    }
};

const getPositionZ = index => {
    switch (index) {
        case 0: {
            return -1;
        }
        case 1: {
            return -0.75;
        }
        case 2: {
            return 0.05;
        }
        case 3: {
            return 0.75;
        }
        case 4: {
            return 1.05;
        }
        case 5: {
            return 0.75;
        }
        case 6: {
            return -0.05;
        }
        case 7: {
            return -0.75;
        }
    }
};

export default ({ orientationPermission, localHost }) => {
    return (
        <>
            <Route
                exact
                path="/gallery"
                component={() => (
                    <Overlay>
                        <Back />
                    </Overlay>
                )}
            />
            <Canvas>
                <Camera />
                <Controls
                    orientationPermission={orientationPermission}
                    localHost={localHost}
                />
                <Skybox />
                <group rotation={[0, -Math.PI / 2, 0]}>
                    {IMAGES.map((imageName, index) => {
                        const rotationY = getRotationX(index);
                        const positionX = getPositionX(index);
                        const positionZ = getPositionZ(index);
                        console.log({ index, positionX, positionZ, rotationY });
                        return (
                            <GalleryImage
                                key={imageName}
                                to={`/gallery/${imageName}`}
                                partialPath={`bts/images/${imageName}.jpg`}
                                position={[positionX, 0, positionZ]}
                                rotation={[0, rotationY, 0]}
                            />
                        );
                    })}
                </group>
            </Canvas>
        </>
    );
};

const Overlay = styled.div`
    position: fixed;
    z-index: 800;
    left: 1rem;
    top: 1rem;
`;
