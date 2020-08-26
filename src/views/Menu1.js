import React from 'react';
import { Link } from 'react-router-dom';

import MenuOverlay from '../components/MenuOverlay';
import MenuContent from '../components/MenuContent';

export default () => {
    return (
        <MenuOverlay>
            <MenuContent backgroundColor="rgb(245, 0, 0, 0.75)">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
                <br />
                <Link to="/">Back</Link>
            </MenuContent>
        </MenuOverlay>
    );
};
