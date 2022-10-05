import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import README from '../README.md';
import { useStyles } from './Home.styled';

const Home = () => {
  const classes = useStyles();
  
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(README)
      .then((res) => res.text())
      .then((res) => {
        setMarkdown(res);
      });
  }, []);

  return (
    <div className={classes.root}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Home;
