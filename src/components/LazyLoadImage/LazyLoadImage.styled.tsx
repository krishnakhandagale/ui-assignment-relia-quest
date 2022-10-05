import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
    {
        pkmImage: {
            maxWidth: '100%',
            maxHeight: '100%',
            height: 'auto'
        }
    },
    { name: 'LazyLoadImage' }
);

