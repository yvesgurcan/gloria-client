import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import ioSocket from './util/io';
import GlobalStyles from './components/GlobalStyles';
import DeveloperTools from './components/DeveloperTools';
import Zone from './views/Zone';
import Kiosk from './views/Kiosk';
import Pedestal from './views/Pedestal';
import Hat from './views/Hat';

const rootElement = document.getElementById('root');

const App = () => {
    const [roomLog, setRoomLog] = useState([]);
    const roomLogRef = useRef([]);
    const [io, setIO] = useState();

    const selectedRef = useRef({});
    const [selected, setSelected] = useState({});

    useEffect(() => {
        ioSocket.on('connect', () => {
            ioSocket.ready = true; // necessary to update components
            setIO(ioSocket);
        });
        ioSocket.on('message', message => {
            console.log('Message received', { message });
            roomLogRef.current = [...roomLogRef.current, message];
            setRoomLog(roomLogRef.current);
        });
    }, []);

    return (
        <>
            <GlobalStyles />
            <DeveloperTools />
            <HashRouter>
                <Route
                    component={({ history }) => {
                        // reconcile React Router history by making it available globally in the 3D menu
                        window.appHistory = history;
                        return <Zone io={io} />;
                    }}
                />
                <Route
                    path="/pedestal"
                    component={() => (
                        <Pedestal color="rgb(0, 168, 224, 0.75)" />
                    )}
                />
                <Route
                    path="/hat"
                    component={() => (
                        <Hat color="rgb(100, 100, 100, 0.75)" />
                    )}
                />
                <Route
                    path="/kiosk1"
                    component={() => (
                        <Kiosk
                            color="orange"
                            io={io}
                            roomLog={roomLog}
                            selectedRef={selectedRef}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    )}
                />
                <Route
                    path="/kiosk2"
                    component={() => (
                        <Kiosk
                            color="blue"
                            io={io}
                            roomLog={roomLog}
                            selectedRef={selectedRef}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    )}
                />
                <Route
                    path="/kiosk3"
                    component={() => (
                        <Kiosk
                            color="green"
                            io={io}
                            roomLog={roomLog}
                            selectedRef={selectedRef}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    )}
                />
                <Route
                    path="/kiosk4"
                    component={() => (
                        <Kiosk
                            color="rgb(180, 180, 0)"
                            io={io}
                            roomLog={roomLog}
                            selectedRef={selectedRef}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    )}
                />
            </HashRouter>
        </>
    );
};

ReactDOM.render(<App />, rootElement);
