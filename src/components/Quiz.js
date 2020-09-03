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
        let result = [];

        Object.keys(selected).forEach(userId => {
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
            When did <i>Wonder Woman</i> make her first appearance?
        </div>
    );
    const answers = [1912, 2010, 1941, 1963];

    console.log(roomId);
    return (
        <Quiz>
            <Question>{QuestionComponent}</Question>
            {answers.map(answer => {
                const selectors = selectedBy(answer);
                return (
                    <Answer
                        key={answer}
                        selectedByUser={
                            io
                                ? selectedBy(answer).filter(
                                      userId => userId === io.id
                                  ).length > 0
                                : false
                        }
                    >
                        <span onClick={() => emitAnswer(answer)}>{answer}</span>
                        <Selectors>
                            {selectors.length > 0
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

    span {
        cursor: pointer;
        ${props => (props.selectedByUser ? 'color: black;' : '')}

        :hover {
            color: black;
        }
    }
`;

const Selectors = styled.div`
    font-size: 0.8rem;
`;

const More = styled.div`
    padding-top: 1.5rem;
`;
