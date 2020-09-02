import React from 'react';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';

export default ({ color }) => {
    return <ViewLayer zIndex={800} backgroundColor={color}></ViewLayer>;
};
