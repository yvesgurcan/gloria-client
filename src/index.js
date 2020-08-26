import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Inside from './views/Inside';
import PinModal from './views/PinModal';
import Menu1 from './views/Menu1';
import Menu2 from './views/Menu2';

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
        <Switch>
            <Route path="/inside" component={Inside} />
            <Route path="/menu1" component={Menu1} />
            <Route path="/menu2" component={Menu2} />
        </Switch>
        <Route path="/inside/pin1" render={() => <PinModal text="1" />} />
        <Route path="/inside/pin2" render={() => <PinModal text="2" />} />
        <Route path="/inside/pin3" render={() => <PinModal text="3" />} />
    </HashRouter>,
    rootElement
);
