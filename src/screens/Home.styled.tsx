import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
    {
      root: {
        minWidth: '100%',
        minHeight: '100%',
        padding: '24px 20%',
        boxSizing: 'border-box',
        '& *':{
          color: 'rgba(255,255,255,.92)'
        },
        '& p': {
          color: 'rgba(255,255,255,.68)',
        },
        '& hr': {
          margin: '24px 0px',
          borderTop: '1px solid rgba(255,255,255,.3)',
          borderBottom: '0px',
          borderLeft: '0px',
          borderRight: '0px',
        },
        '& p, & li': {
          lineHeight: '24px',
        },
        '& li': {
          marginTop: '12px',
        },
      },
      '@media (min-width: 1024px)': {
        root: {
          padding: '24px 32px',
        },
      },
    },
    { name: 'Home' }
  );