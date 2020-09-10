import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import GlobalStyles from './components/Global.Styles';
import DeveloperTools from './components/Global.DeveloperTools';
import Zone from './views/Zone';
import Gallery from './views/Gallery';

const ROOT_ELEMENT = document.getElementById('root');

const App = () => {
    return (
        <>
            <GlobalStyles />
            <DeveloperTools />
            <HashRouter>
                <Switch>
                    <Route path="/gallery" component={() => <Gallery />} />
                    <Route
                        path="/"
                        component={({ history }) => {
                            // reconcile React Router history by making it available globally in the 3D menu
                            console.log('yolo');
                            window.appHistory = history;
                            return <Zone />;
                        }}
                    />
                </Switch>
            </HashRouter>
        </>
    );
};

ReactDOM.render(<App />, ROOT_ELEMENT);
