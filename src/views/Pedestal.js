import React from 'react';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';
import TriforceModelViewer from '../components/TriforceModelViewer';

export default ({ color }) => {
    return (
        <ViewLayer backgroundColor={color}>
            <Content>
                <TriforceModelViewer />
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
