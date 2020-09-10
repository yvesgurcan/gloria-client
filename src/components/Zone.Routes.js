import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';

import ioSocket from '../util/io';

import Hat from '../views/Zone.Hat';
import Statue from '../views/Zone.Statue';
import Arcade from '../views/Zone.Arcade';

export default () => {
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
        <Switch>
            <Route
                path="/hat"
                component={() => <Hat color="rgb(100, 100, 100, 0.75)" />}
            />
            <Route
                path="/wings"
                component={() => <Statue color="rgb(0, 168, 224, 0.75)" />}
            />
            <Route
                path="/arcade"
                component={() => (
                    <Arcade
                        color="rgb(180, 180, 0)"
                        io={io}
                        roomLog={roomLog}
                        selectedRef={selectedRef}
                        selected={selected}
                        setSelected={setSelected}
                    />
                )}
            />
        </Switch>
    );
};
