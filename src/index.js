import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import packageJson from '../package.json';
import attachUIConsole from './util/attachUIConsole';
import Home from './views/Home';
import TriforceModal from './views/TriforceModal';
import StandAloneAR from './views/StandAloneAR';
import VersionOverlay from './components/VersionOverlay';

const rootElement = document.getElementById('root');

attachUIConsole();

// log version to check updates in production
console.info(packageJson.name, packageJson.version);

ReactDOM.render(
    <HashRouter>
        <VersionOverlay>{packageJson.version}</VersionOverlay>
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
        <Route path="/triforce" component={TriforceModal} />
        <Route path="/ar" component={StandAloneAR} />
    </HashRouter>,
    rootElement
);
