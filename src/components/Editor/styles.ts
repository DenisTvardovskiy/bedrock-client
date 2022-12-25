import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    editor: {
        border: '1px solid red',
        width: '100%',
    },
    line: {
        width: '100%',
        height: '100%',
        display: 'flex',
        border: '1px solid blue',

        '&[data-edit-leaf="true"]': {
            '&::after': {
                content: "''",
                display: 'inline-flex',
                alignSelf: 'center',
                position: 'relative',
                height: 15,
                width: 1,
                background: 'red',
            },
        },
    },
});

export default styles;
