import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';

export default ({ color, io, roomLog }) => {
    const [input, setInput] = useState('something');
    const { userId: roomId, ...params } = useParams();
    const { search, pathname, ...location } = useLocation();
    const history = useHistory();
    const link = useMemo(() => {
        return `${window.location.href.replace('?join', '')}?join`;
    });

    useEffect(() => {
        if (!io || !io.id) {
            return;
        }

        // User wants to join somebody else
        if (search === '?join' && io.id !== roomId) {
            console.log(`Request to join ${roomId}.`);
            io.emit('joinRoom', roomId);
            // User is using an old URL
        } else {
            const path = pathname.split('/');
            const newPath = `/${path[1]}/${io.id}`;
            history.push(newPath);
        }
    }, [io]);

    return (
        <ViewLayer zIndex={800} backgroundColor={color}>
            <div>
                <br />
                Send this link to play with your friends:{' '}
                <a target="_blank" href={link}>
                    {link}
                </a>
                <br />
                <br />
                <div>Your ID: {io && io.id}</div>
                <br />
                <br />
                <div>
                    Room activity:
                    <div>
                        {roomLog.map(message => (
                            <div key={Math.random()}>{message}</div>
                        ))}
                    </div>
                </div>
                <br />
                <br />
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        io.emit('message', {
                            input: `User ${io.id} said: ${input}`,
                            roomId
                        });
                        setInput('');
                    }}
                >
                    <label>
                        Say something:{' '}
                        <input
                            value={input}
                            onChange={event => setInput(event.target.value)}
                        />
                        <button>Send</button>
                    </label>
                </form>
            </div>
        </ViewLayer>
    );
};
