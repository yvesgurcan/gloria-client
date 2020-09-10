import React, { useEffect } from 'react';
import styled from 'styled-components';
import faker from 'faker';

export default ({ io, roomId, selectedRef, selected, setSelected }) => {
    useEffect(() => {
        console.log('mounted');
    }, []);

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

    function selectedBy(answer) {
        let result = [];

        if (!selected) {
            return [];
        }

        Object.keys(selected).forEach(userId => {
            if (selected[userId] && selected[userId] === answer) {
                faker.seed(
                    userId.split().map(character => character.charCodeAt(0))
                );
                const fakeName = faker.name.findName();
                result = [...result, fakeName];
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
