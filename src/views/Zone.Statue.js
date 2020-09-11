import React from 'react';
import styled from 'styled-components';

import ViewLayer from '../components/Zone.ViewLayer';
import ModelViewer from '../components/Statue.ModelViewer';

export default ({ color }) => {
    return (
        <ViewLayer backgroundColor={color}>
            <Content>
                <ModelViewer />
            </Content>
        </ViewLayer>
    );
};

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
