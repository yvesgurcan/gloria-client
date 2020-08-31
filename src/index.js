import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import packageJson from '../package.json';
import attachUIConsole from './util/attachUIConsole';
import Home from './views/Home';
import TriforceRoom from './views/TriforceRoom';
import AR from './views/AR';

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

                if (history.location.pathname === '/ar') {
                    return null;
                }

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
        <Route
            component={({ history }) => {
                return <AR display={history.location.pathname === '/ar'} />;
            }}
        />
    </HashRouter>,
    rootElement
);
