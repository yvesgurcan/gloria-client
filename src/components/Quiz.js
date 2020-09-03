import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export default ({ io, roomId }) => {
    const selectedRef = useRef();
    const [selected, setSelected] = useState({});

    useEffect(() => {
        if (io) {
            io.on('answer', data => {
                const updatedSelected = {
                    ...selectedRef.current,
                    [data.userId]: data.answer
                };
                setSelected(updatedSelected);
                selectedRef.current = updatedSelected;
            });
        }
    }, [io]);

    console.log({ selected });

    function selectedBy(answer) {
        let result = '';

        Object.keys(selected).forEach(userId => {
            console.log(
                userId,
                selected[userId],
                answer,
                selected[userId] && selected[userId] === answer
            );
            if (selected[userId] && selected[userId] === answer) {
                result = [...result, userId];
            }
        });

        return result;
    }

    function emitAnswer(answer) {
        io.emit('answer', { answer, roomId, userId: io.id });
    }

    const QuestionComponent = (
        <div>
            When did <i>Wonder</i> Woman make her first appearnace?
        </div>
    );
    const answers = [1941, 2010, 1977, 1960];

    return (
        <Quiz>
            <Question>{QuestionComponent}</Question>
            {answers.map(answer => {
                console.log(selectedBy(answer));
                const selectors = selectedBy(answer);
                return (
                    <Answer key={answer} onClick={() => emitAnswer(answer)}>
                        {answer}
                        <Selectors>
                            {selectors
                                ? `Selected by: ${selectors.join(', ')}`
                                : ''}
                        </Selectors>
                    </Answer>
                );
            })}
        </Quiz>
    );
};

const Question = styled.div`
    padding-bottom: 1rem;
`;

const Quiz = styled.div`
    text-align: center;
    font-size: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

const Answer = styled.div`
    padding: 1rem;
    cursor: pointer;
`;

const Selectors = styled.div`
    font-size: 0.8rem;
`;

const More = styled.div`
    padding-top: 1.5rem;
`;
