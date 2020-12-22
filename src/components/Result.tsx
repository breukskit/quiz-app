import React from 'react';
import { State, defaultState } from '../App';
import { createUseStyles } from 'react-jss';

interface IProps {
  numOfQuestion: number;
  setNumOfQuestion: React.Dispatch<React.SetStateAction<number>>;
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
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
    marginBottom: '1.5rem',
  },
  nextButton: {
    display: 'block',
    margin: 'auto',
    width: '100%',
    maxWidth: '550px',
    padding: '.5rem',
    textTransform: 'uppercase',
    backgroundColor: 'white',
    border: '2px solid black',
    transition: 'all 200ms',
    fontWeight: '600',
    marginBottom: '.5rem',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'black',
      color: 'white',
    },
  },
});

export const Result = (props: IProps) => {
  const { setState, setNumOfQuestion, setScore } = props;
  const classes = useStyles();
  const restart = () => {
    setState(defaultState);
    setScore(0);
    setNumOfQuestion(0);
  };
  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.header}>Great Job!</h1>
      <p className={classes.paragraph}>Your score: {props.score}%</p>
      <div className={classes.progressBar}>
        <div className={classes.progress}></div>
      </div>
      <h3 className={classes.subtitle}>Complete!</h3>
      <button onClick={restart} className={classes.nextButton}>
        Restart
      </button>
    </div>
  );
};
