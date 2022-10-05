import { createUseStyles } from "react-jss";
export const useStyles = createUseStyles(
    {
        root: {
            background: '#171E2b',
            minHeight: '100vh',
            minWidth: '100vw',
            height: '100%',
            width: '100%',
            display: 'flex'
        },
        content: {
            flex: '1',
            overflow: 'hidden',
            position: 'relative',
        },
        scrollableArea: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'auto',
        },
    },
    { name: 'App' }
);