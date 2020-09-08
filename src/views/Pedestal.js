import React from 'react';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';
import WingedMannModelViewer from '../components/WingedMannModelViewer';

export default ({ color }) => {
    return (
        <ViewLayer backgroundColor={color}>
            <Content>
                <WingedMannModelViewer />
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
