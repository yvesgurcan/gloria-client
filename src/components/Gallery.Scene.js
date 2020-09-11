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
    'WW84-19085',
    'WW84-19648',
    'WW84-20179r',
    'WW84-20641',
    'WW84-20802',
    'WW84-21616',
    'WW84-22690',
    'WW84-22704',
    'WW84-22911',
    'WW84-23738',
    'WW84-25607',
    'WW84-27046',
    'WW84-34148r'
];

const FACES = 8;

const DISTANCE_MULTIPLIER = 3;

const getRotationX = index => {
    const rowNumber = Math.floor(index / FACES);
    switch (rowNumber) {
        default: {
            return 0;
        }
        case 0: {
            return -Math.PI / 8;
        }
        case 2: {
            return Math.PI / 8;
        }
    }
};

const getRotationY = index => {
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

const getRotationZ = index => {
    const rowNumber = Math.floor(index / FACES);
    switch (rowNumber) {
        default: {
            return 0;
        }
        case 0: {
            return Math.PI / 2;
        }
    }
};

const getPositionX = index => {
    switch (index) {
        case 0: {
            return 0;
        }
        case 1: {
            return 0.75 * DISTANCE_MULTIPLIER;
        }
        case 2: {
            return 1.05 * DISTANCE_MULTIPLIER;
        }
        case 3: {
            return 0.75 * DISTANCE_MULTIPLIER;
        }
        case 4: {
            return 0;
        }
        case 5: {
            return -0.75 * DISTANCE_MULTIPLIER;
        }
        case 6: {
            return -1.05 * DISTANCE_MULTIPLIER;
        }
        case 7: {
            return -0.75 * DISTANCE_MULTIPLIER;
        }
    }
};

const getPositionY = index => {
    const rowNumber = Math.floor(index / FACES);
    const middleOfGallery =
        Math.ceil((IMAGES.length / FACES) * FACES) / FACES / 2;
    return rowNumber - middleOfGallery;
};

const getPositionZ = index => {
    switch (index) {
        case 0: {
            return -1 * DISTANCE_MULTIPLIER;
        }
        case 1: {
            return -0.75 * DISTANCE_MULTIPLIER;
        }
        case 2: {
            return 0.05 * DISTANCE_MULTIPLIER;
        }
        case 3: {
            return 0.75 * DISTANCE_MULTIPLIER;
        }
        case 4: {
            return 1.05 * DISTANCE_MULTIPLIER;
        }
        case 5: {
            return 0.75 * DISTANCE_MULTIPLIER;
        }
        case 6: {
            return -0.05 * DISTANCE_MULTIPLIER;
        }
        case 7: {
            return -0.75 * DISTANCE_MULTIPLIER;
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
                <group rotation={[0, Math.PI / 4, 0]}>
                    <group>
                        <GalleryImage
                            to={`/gallery/${IMAGES[0]}`}
                            partialPath={`bts/images/${IMAGES[0]}.jpg`}
                            position={[0, 1.5, -2]}
                            rotation={[Math.PI / 5, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[1]}`}
                            partialPath={`bts/images/${IMAGES[1]}.jpg`}
                            position={[0, 0, -2]}
                            rotation={[0, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[2]}`}
                            partialPath={`bts/images/${IMAGES[2]}.jpg`}
                            position={[0, -1.5, -2]}
                            rotation={[-Math.PI / 5, 0, 0]}
                        />
                    </group>
                    <group rotation={[0, -Math.PI / 4, 0]}>
                        <GalleryImage
                            to={`/gallery/${IMAGES[3]}`}
                            partialPath={`bts/images/${IMAGES[3]}.jpg`}
                            position={[0, 1.5, -2]}
                            rotation={[Math.PI / 5, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[4]}`}
                            partialPath={`bts/images/${IMAGES[4]}.jpg`}
                            position={[0, 0, -2]}
                            rotation={[0, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[5]}`}
                            partialPath={`bts/images/${IMAGES[5]}.jpg`}
                            position={[0, -1.5, -2]}
                            rotation={[-Math.PI / 5, 0, 0]}
                        />
                    </group>
                    <group rotation={[0, (-Math.PI / 4) * 3, 0]}>
                        <GalleryImage
                            to={`/gallery/${IMAGES[6]}`}
                            partialPath={`bts/images/${IMAGES[6]}.jpg`}
                            position={[0, 1.5, -2]}
                            rotation={[Math.PI / 5, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[7]}`}
                            partialPath={`bts/images/${IMAGES[7]}.jpg`}
                            position={[0, 0, -2]}
                            rotation={[0, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[8]}`}
                            partialPath={`bts/images/${IMAGES[8]}.jpg`}
                            position={[0, -1.5, -2]}
                            rotation={[-Math.PI / 5, 0, 0]}
                        />
                    </group>
                    <group rotation={[0, -Math.PI / 2, 0]}>
                        <GalleryImage
                            to={`/gallery/${IMAGES[9]}`}
                            partialPath={`bts/images/${IMAGES[9]}.jpg`}
                            position={[0, 1.5, -2]}
                            rotation={[Math.PI / 5, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[10]}`}
                            partialPath={`bts/images/${IMAGES[10]}.jpg`}
                            position={[0, 0, -2]}
                            rotation={[0, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[11]}`}
                            partialPath={`bts/images/${IMAGES[11]}.jpg`}
                            position={[0, -1.5, -2]}
                            rotation={[-Math.PI / 5, 0, 0]}
                        />
                    </group>
                    <group rotation={[0, -Math.PI, 0]}>
                        <GalleryImage
                            to={`/gallery/${IMAGES[12]}`}
                            partialPath={`bts/images/${IMAGES[12]}.jpg`}
                            position={[0, 1.5, -2]}
                            rotation={[Math.PI / 5, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[13]}`}
                            partialPath={`bts/images/${IMAGES[13]}.jpg`}
                            position={[0, 0, -2]}
                            rotation={[0, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[14]}`}
                            partialPath={`bts/images/${IMAGES[14]}.jpg`}
                            position={[0, -1.5, -2]}
                            rotation={[-Math.PI / 5, 0, 0]}
                        />
                    </group>
                    <group rotation={[0, (Math.PI / 4) * 3, 0]}>
                        <GalleryImage
                            to={`/gallery/${IMAGES[15]}`}
                            partialPath={`bts/images/${IMAGES[15]}.jpg`}
                            position={[0, 1.5, -2]}
                            rotation={[Math.PI / 5, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[16]}`}
                            partialPath={`bts/images/${IMAGES[16]}.jpg`}
                            position={[0, 0, -2]}
                            rotation={[0, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[17]}`}
                            partialPath={`bts/images/${IMAGES[17]}.jpg`}
                            position={[0, -1.5, -2]}
                            rotation={[-Math.PI / 5, 0, 0]}
                        />
                    </group>
                    <group rotation={[0, Math.PI / 2, 0]}>
                        <GalleryImage
                            to={`/gallery/${IMAGES[18]}`}
                            partialPath={`bts/images/${IMAGES[18]}.jpg`}
                            position={[0, 1.5, -2]}
                            rotation={[Math.PI / 5, 0, 0]}
                        />
                        <GalleryImage
                            to={`/gallery/${IMAGES[19]}`}
                            partialPath={`bts/images/${IMAGES[19]}.jpg`}
                            position={[0, 0, -2]}
                            rotation={[0, 0, 0]}
                        />
                    </group>
                    {/*IMAGES.map((imageName, index) => {
                        const rotationX = getRotationX(index);
                        const rotationY = getRotationY(index % FACES);
                        const rotationZ = getRotationZ(index);
                        const positionX = getPositionX(index % FACES);
                        const positionY = getPositionY(index);
                        const positionZ = getPositionZ(index % FACES);
                        console.log({
                            index,
                            positionX,
                            positionY,
                            positionZ,
                            rotationX,
                            rotationY,
                            rotationZ
                        });
                        return (
                            <GalleryImage
                                key={imageName}
                                to={`/gallery/${imageName}`}
                                partialPath={`bts/images/${imageName}.jpg`}
                                position={[positionX, positionY, positionZ]}
                                rotation={[rotationX, rotationY, 0]}
                            />
                        );
                    })*/}
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
