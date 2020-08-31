import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MenuOverlay from '../components/MenuOverlay';
import MenuContent from '../components/MenuContent';
import TriforceARViewer from '../components/TriforceARViewer';

export default () => {
    return (
        <MenuOverlay>
            <MenuContent backgroundColor="rgb(0, 168, 224, 0.75)">
                <Link to="/">Back</Link>
                <CenteredViewer>
                    <TriforceARViewer />
                </CenteredViewer>
            </MenuContent>
        </MenuOverlay>
    );
};

const CenteredViewer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
