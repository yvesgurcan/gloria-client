import React from 'react';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';
import HatModelViewer from '../components/HatModelViewer';

export default ({ color }) => {
    return (
        <ViewLayer backgroundColor={color}>
            <Content>
                <HatModelViewer />
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
