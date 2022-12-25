import React, { useState } from 'react';
import { omit, isEqual, pick } from 'lodash';
import useStyles from './styles';

interface IWord {
    type: string;
    text: string;
    weight: string;
    color: string;
    size: string;
    default: boolean;
}

const Editor = () => {
    const classes = useStyles();
    const initLines = [
        {
            editing: true,
            data: [
                {
                    type: '1',
                    text: '1',
                    weight: 'bold',
                    color: 'black',
                    size: '',
                },
                {
                    type: '1',
                    text: '1',
                    weight: 'bold',
                    color: 'normal',
                    size: '',
                },
            ],
        },
    ];
    const [lines, setLines] = useState(initLines);

    const generateLine = () => {
        let result;
        initLines[0].data.reduce((previousValue: any, currentValue: any) => {
            if (compareParts(previousValue, currentValue)) {
                result = previousValue;
                result.text += currentValue.text;
            }
        });

        console.log(result);
    };

    const compareParts = (previous, next) => isEqual(omit(previous, 'text'), omit(next, 'text'));

    generateLine();

    return (
        <div className={classes.editor}>
            {lines.map((line) => (
                <>
                    <div className={classes.line} data-edit-leaf={line.editing}>
                        {line.data.map((part) =>
                            part.default ? (
                                part.text
                            ) : (
                                <span style={{ color: part.color }}>{part.text}</span>
                            ),
                        )}
                    </div>
                </>
            ))}
        </div>
    );
};

export default Editor;
