import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import faker from 'faker';

import ViewLayer from '../components/Zone.ViewLayer';
import Quiz from '../components/Arcade.Quiz';

export default ({ color, io, roomLog, selectedRef, selected, setSelected }) => {
    const [name, setName] = useState('');
    const [input, setInput] = useState('something');

    const { search, pathname } = useLocation();

    const roomId = useMemo(() => {
        if (search.indexOf('?join=') > -1) {
            return search.replace('?join=', '');
        }

        return io && io.id;
    }, [search, io]);

    function getSmsUrl(content) {
        const ua = navigator.userAgent.toLowerCase();
        let url;

        if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1)
            url = 'sms:458-221-8603;body=' + encodeURIComponent(content);
        else url = 'sms:?body=' + encodeURIComponent(content);

        return url;
    }

    const link = useMemo(() => {
        if (!roomId) {
            return { sms: undefined, web: undefined };
        }

        const { protocol, hostname, port } = window.location;

        const weblink = `${protocol}//${hostname}${
            port ? `:${port}` : ''
        }/#${pathname}?join=${roomId}`;

        return { sms: getSmsUrl(weblink), web: weblink };
    }, [io, roomId]);

    useEffect(() => {
        if (io && io.id) {
            faker.seed(io.id.split().map(character => character.charCodeAt(0)));
            const fakeName = faker.name.findName();
            setName(fakeName);
        }
    }, [io]);

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
                <Centered>Welcome, {name}!</Centered>
                <br />
                <Centered>
                    Send this link to your friends to invite them to play with
                    you: <a href={link.sms}>{link.web}</a>
                </Centered>
                <Quiz
                    io={io}
                    roomId={roomId}
                    selectedRef={selectedRef}
                    selected={selected}
                    setSelected={setSelected}
                />
                <hr />
                <br />
                {roomLog.length > 0 && (
                    <div>
                        <b>Messages:</b>
                        <br />
                        <div>
                            {roomLog.map(message => (
                                <div key={Math.random()}>{message}</div>
                            ))}
                        </div>
                    </div>
                )}
                <br />
                <br />
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        io.emit('message', {
                            input: `${name} said: ${input}`,
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
                        <button type="submit">Send</button>
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
