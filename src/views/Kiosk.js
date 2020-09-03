import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';
import Quiz from '../components/Quiz';

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
        }
    }, [io]);

    return (
        <ViewLayer zIndex={800} backgroundColor={color}>
            <Content>
                <Centered>Welcome, {io && io.id}!</Centered>
                <br />
                <Centered>
                    Send this link to your friends to invite them to play with
                    you:{' '}
                    <a target="_blank" href={link}>
                        {link}
                    </a>
                </Centered>
                <Quiz io={io} roomId={roomId} />
                <hr />
                <br />
                <div>
                    Messages:
                    <br />
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
                            input: `${io.id} said: ${input}`,
                            roomId
                        });
                        setInput('');
                    }}
                >
                    <label>
                        Say something to your friends:{' '}
                        <input
                            value={input}
                            onChange={event => setInput(event.target.value)}
                        />
                        <button>Send</button>
                    </label>
                </form>
            </Content>
        </ViewLayer>
    );
};

const Content = styled.div`
    padding-top: 2rem;
`;

const Centered = styled.div`
    text-align: center;
`;
