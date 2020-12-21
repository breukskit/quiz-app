import React from 'react';
import { createUseStyles } from 'react-jss';
import { QUESTIONS } from './Questions';

interface IProps {
  question: string;
  numOfQuestion: number;
}

const useStyles = createUseStyles({
  headerContainer: {
    marginBottom: '1.5rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
  },
  progressBar: {
    height: '10px',
    width: '25%',
    margin: 'auto',
    backgroundColor: '#F4F4F4',
    marginBottom: '1.5rem',
    '@media (max-width: 575px)': {
      width: '40%',
    },
  },
  progress: {
    height: '100%',
    width: (numOfQuestion) => {
      switch (numOfQuestion) {
        case 0:
          return '0%';
        case 1:
          return '25%';
        case 2:
          return '50%';
        case 3:
          return '75%';
        case 4:
          return '100%';
      }
    },
    backgroundColor: '#F09D28',
    borderRight: '3px solid black',
    transition: 'all 200ms',
  },
  subtitle: {
    textAlign: 'center',
    color: '#C6C5C5',
  },
});

export const Header = (props: IProps) => {
  const { question, numOfQuestion } = props;
  const classes = useStyles(numOfQuestion);
  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.header}>{question}</h1>
      <p className={classes.paragraph}>
        {numOfQuestion + 1} of {QUESTIONS.length}
      </p>
      <div className={classes.progressBar}>
        <div className={classes.progress}></div>
      </div>
      <h3 className={classes.subtitle}>Pick an option below!</h3>
    </div>
  );
};
