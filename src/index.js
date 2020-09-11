import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import reactRouterHistoryReconciler from './util/reactRouterHistoryReconciler';
import GlobalStyles from './components/Global.Styles';
import DeveloperTools from './components/Global.DeveloperTools';
import Zone from './views/Zone';
import Gallery from './views/Gallery';

const ROOT_ELEMENT = document.getElementById('root');

const App = () => (
    <>
        <GlobalStyles />
        <DeveloperTools />
        <HashRouter>
            <Switch>
                <Route
                    path="/gallery"
                    component={reactRouterHistoryReconciler(<Gallery />)}
                />
                <Route
                    path="/"
                    component={reactRouterHistoryReconciler(<Zone />)}
                />
            </Switch>
        </HashRouter>
    </>
);

ReactDOM.render(<App />, ROOT_ELEMENT);
