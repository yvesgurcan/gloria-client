import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import packageJson from '../package.json';
import attachUIConsole from './util/attachUIConsole';
import Home from './views/Home';
import TriforceRoom from './views/TriforceRoom';

const rootElement = document.getElementById('root');

attachUIConsole();

// log version to check updates in production
console.info(packageJson.name, packageJson.version);

ReactDOM.render(
    <HashRouter>
        <Route
            component={({ history }) => {
                // reconcile React Router history by making it available globally in the 3D menu
                window.appHistory = history;
                return <Home />;
            }}
        />
        <Route
            component={({ history }) => {
                return (
                    <TriforceRoom
                        display={history.location.pathname === '/triforce'}
                    />
                );
            }}
        />
    </HashRouter>,
    rootElement
);
