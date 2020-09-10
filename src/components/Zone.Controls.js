import React from 'react';

import OrbitControls from './Zone.OrbitControls';
import OrbitControlsLimited from './Zone.OrbitControlsLimited';

export default ({ localHost }) => {
    return localHost ? <OrbitControls /> : <OrbitControlsLimited />;
};
