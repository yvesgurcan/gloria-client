import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MenuOverlay from '../components/MenuOverlay';
import MenuContent from '../components/MenuContent';

export default ({ text, to }) => {
    return (
        <MenuOverlay zIndex={800}>
            <MenuContent backgroundColor="rgb(245, 0, 0, 0.75)">
                <Link to={to}>Back</Link>
                <BigNumber>{text}</BigNumber>
            </MenuContent>
        </MenuOverlay>
    );
};

const BigNumber = styled.div`
    font-size: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
