import React, { FormEvent, SyntheticEvent } from 'react';
import { createUseStyles } from 'react-jss';
import { State, defaultState } from '../App';

interface IProps {
  numOfQuestion: number;
  setNumOfQuestion: React.Dispatch<React.SetStateAction<number>>;
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
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

export const AlternativesThree = (props: IProps) => {
  const {
    numOfQuestion,
    setNumOfQuestion,
    state,
    setState,
    score,
    setScore,
  } = props;
  const classes = useStyles();
  const handleChange = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    setState({ ...state, [target.name]: target.value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (state.CSSAcronym !== '') {
      if (state.CSSAcronym === 'cascadingStyleSheets') {
        setScore(score + 20);
      }
      setNumOfQuestion(numOfQuestion + 1);
    }
  };
  const restart = () => {
    setState(defaultState);
    setScore(0);
    setNumOfQuestion(0);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formInner}>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="CSSAcronym"
              value="countrySheriffService"
              id="countrySheriffService"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="countrySheriffService">
              Country Sheriff Service
            </label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="CSSAcronym"
              value="cascadingSexySheets"
              id="cascadingSexySheets"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="cascadingSexySheets">Cascading Sexy Sheets</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="CSSAcronym"
              value="cascadingStyleSheets"
              id="cascadingStyleSheets"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="cascadingStyleSheets">Cascading Style Sheets</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="CSSAcronym"
              value="columnStableSheets"
              id="columnStableSheets"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="columnStableSheets">Column Stable Sheets</label>
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
