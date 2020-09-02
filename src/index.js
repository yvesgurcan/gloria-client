import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
import DeveloperTools from './components/DeveloperTools';
import Zone from './views/Zone';
import Kiosk from './views/Kiosk';
import Pedestal from './views/Pedestal';

const rootElement = document.getElementById('root');

const App = () => {
    return (
        <>
            <GlobalStyles />
            <DeveloperTools />
            <HashRouter>
                <Route
                    component={({ history }) => {
                        // reconcile React Router history by making it available globally in the 3D menu
                        window.appHistory = history;
                        return <Zone />;
                    }}
                />
                <Route
                    path="/pedestal"
                    component={() => (
                        <Pedestal color="rgb(0, 168, 224, 0.75)" />
                    )}
                />
                <Route
                    path="/kiosk1"
                    component={() => <Kiosk color="orange" />}
                />
                <Route
                    path="/kiosk2"
                    component={() => <Kiosk color="blue" />}
                />
                <Route
                    path="/kiosk3"
                    component={() => <Kiosk color="green" />}
                />
                <Route
                    path="/kiosk4"
                    component={() => <Kiosk color="yellow" />}
                />
            </HashRouter>
        </>
    );
};

ReactDOM.render(<App />, rootElement);
