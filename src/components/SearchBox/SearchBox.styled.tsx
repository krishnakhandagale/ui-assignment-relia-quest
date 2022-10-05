import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    searchBoxCnt: {
        display: 'flex',
        width: 'calc(100% - 16px)',
        alignItems: 'center'
    },
    searchInput: {
        color: '#000000',
        width: '100%',
        padding: '12px 42px',
        outline: 'none',
        borderRadius: '32px'
    },  
    icon: {
        position: 'absolute',
        paddingLeft: '16px'
    }
},
    { name: 'SearchBox' }
);

