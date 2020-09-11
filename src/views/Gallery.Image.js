import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import ViewLayer from '../components/Gallery.ViewLayer';

export default () => {
    const { imageName } = useParams();
    return (
        <ViewLayer backgroundColor="rgb(0, 0, 0, 0.8)" back="/gallery">
            <ImageViewer>
                <img src={`public/bts/images/${imageName}.jpg`} />
            </ImageViewer>
        </ViewLayer>
    );
};

const ImageViewer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
        max-width: 100%;
        max-height: 100vh;
    }
`;
