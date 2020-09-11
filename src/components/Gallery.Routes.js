import React from 'react';
import { Route, Switch } from 'react-router';

import GalleryImage from '../views/Gallery.Image';

export default () => {
    return (
        <Switch>
            <Route path="/gallery/:imageName" component={GalleryImage} />
        </Switch>
    );
};
