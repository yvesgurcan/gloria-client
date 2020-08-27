import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import TriforceRoom from './views/TriforceRoom';

const rootElement = document.getElementById('root');
const customHistory = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={customHistory}>
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
