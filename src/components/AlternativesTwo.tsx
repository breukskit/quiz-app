import React, { FormEvent, SyntheticEvent } from 'react';
import { createUseStyles } from 'react-jss';
import { State, defaultState } from '../App';

interface IProps {
  numOfQuestion: number;
  setNumOfQuestion: React.Dispatch<React.SetStateAction<number>>;
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

const useStyles = createUseStyles({
  formInner: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    maxWidth: '600px',
    margin: 'auto',
    '@media (max-width: 575px)': {
      gridTemplateColumns: '1fr',
    },
    marginBottom: '1.5rem',
  },
  radioContainer: {
    backgroundColor: '#F4F4F4',
    display: 'flex',
    alignItems: 'center',
    padding: {
      top: '2rem',
      left: '1rem',
      bottom: '2rem',
      right: '3rem',
    },
  },
  radioInput: {
    marginRight: '.5rem',
    color: '#EE9C37',
    '&:hover': {
      cursor: 'pointer',
    },
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

export const AlternativesTwo = (props: IProps) => {
  const { numOfQuestion, setNumOfQuestion, state, setState } = props;
  const classes = useStyles();
  const handleChange = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    setState({ ...state, [target.name]: target.value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (state.javaScriptCreated !== '') {
      setNumOfQuestion(numOfQuestion + 1);
      console.log(state);
    }
  };
  const restart = () => {
    setState(defaultState);
    setNumOfQuestion(0);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formInner}>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="javaScriptCreated"
              value="june1995"
              id="june1995"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="junge1995">June 1995</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="javaScriptCreated"
              value="may1995"
              id="may1995"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="may1995">May 1995</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="javaScriptCreated"
              value="july1885"
              id="july1885"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="july1885">July 1885</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="javaScriptCreated"
              value="september1996"
              id="september1996"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="september1996">September 1996</label>
          </div>
        </div>
        <button className={classes.nextButton} type="submit">
          Next
        </button>
      </form>
      <button onClick={restart} className={classes.nextButton}>
        Restart
      </button>
    </div>
  );
};
