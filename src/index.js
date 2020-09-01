import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import packageJson from '../package.json';
import attachUIConsole from './util/attachUIConsole';
import Home from './views/Home';
import TriforceModal from './views/TriforceModal';
import StandAloneAR from './views/StandAloneAR';
import ToolOverlay from './components/ToolOverlay';
import Inside from './components/Inside';
import PinModal from './views/PinModal';

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
        <Route
            path="/inside1"
            component={() => <Inside color="orange" to="/inside1" />}
        />
        <Route
            path="/inside2"
            component={() => <Inside color="blue" to="/inside2" />}
        />
        <Route
            path="/inside3"
            component={() => <Inside color="green" to="/inside3" />}
        />
        <Route
            path="/inside4"
            component={() => <Inside color="yellow" to="/inside4" />}
        />

        <Route
            path="/inside1/pin1"
            render={() => <PinModal to="/inside1" text="1" />}
        />
        <Route
            path="/inside1/pin2"
            render={() => <PinModal to="/inside1" text="2" />}
        />
        <Route
            path="/inside1/pin3"
            render={() => <PinModal to="/inside1" text="3" />}
        />

        <Route
            path="/inside2/pin1"
            render={() => <PinModal to="/inside2" text="A" />}
        />
        <Route
            path="/inside2/pin2"
            render={() => <PinModal to="/inside2" text="B" />}
        />
        <Route
            path="/inside2/pin3"
            render={() => <PinModal to="/inside2" text="C" />}
        />

        <Route
            path="/inside3/pin1"
            render={() => <PinModal to="/inside3" text="I" />}
        />
        <Route
            path="/inside3/pin2"
            render={() => <PinModal to="/inside3" text="II" />}
        />
        <Route
            path="/inside3/pin3"
            render={() => <PinModal to="/inside3" text="II" />}
        />
        <Route
            path="/inside4/pin1"
            render={() => <PinModal to="/inside4" text="a" />}
        />
        <Route
            path="/inside4/pin2"
            render={() => <PinModal to="/inside4" text="b" />}
        />
        <Route
            path="/inside4/pin3"
            render={() => <PinModal to="/inside4" text="c" />}
        />
    </HashRouter>,
    rootElement
);
