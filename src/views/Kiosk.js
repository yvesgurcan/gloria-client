import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router';

import ViewLayer from '../components/ViewLayer';

export default ({ color, io, roomLog }) => {
    const [input, setInput] = useState('something');
    const { search, pathname } = useLocation();

    const roomId = useMemo(() => {
        if (search.indexOf('?join=') > -1) {
            return search.replace('?join=', '');
        }

        return io && io.id;
    }, [search, io]);

    const link = useMemo(() => {
        if (!roomId) {
            return;
        }

        const { protocol, hostname, port } = window.location;
        return `${protocol}//${hostname}${
            port ? `:${port}` : ''
        }/#${pathname}?join=${roomId}`;
    }, [io, roomId]);

    useEffect(() => {
        if (!io || !io.id) {
            return;
        }

        // User wants to join somebody else
        if (search.indexOf('?join=') > -1) {
            console.log(`Request to join ${roomId}.`);
            io.emit('joinRoom', roomId);
            // User is using an old URL
        }
    }, [io]);

    console.log({ roomId, link, io });

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
