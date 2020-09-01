import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import packageJson from '../package.json';
import attachUIConsole from './util/attachUIConsole';
import Home from './views/Home';
import TriforceModal from './views/TriforceModal';
import StandAloneAR from './views/StandAloneAR';
import ToolOverlay from './components/ToolOverlay';

const rootElement = document.getElementById('root');

attachUIConsole();

// log version to check updates in production
console.info(packageJson.name, packageJson.version);

ReactDOM.render(
    <HashRouter>
        <ToolOverlay>
            {packageJson.version}{' '}
            <button
                onClick={() => {
                    localStorage.removeItem('3d-dome-orientationPermission');
                    window.location.reload();
                }}
            >
                Reset permissions
            </button>
        </ToolOverlay>
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
