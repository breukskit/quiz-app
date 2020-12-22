import React, { FormEvent, SyntheticEvent } from 'react';
import { createUseStyles } from 'react-jss';
import { State } from '../App';

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
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'black',
      color: 'white',
    },
  },
});

export const AlternativesFive = (props: IProps) => {
  const { numOfQuestion, setNumOfQuestion, state, setState } = props;
  const classes = useStyles();
  const handleChange = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    setState({ ...state, [target.name]: target.value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (state.president !== '') {
      setNumOfQuestion(numOfQuestion + 1);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formInner}>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="clgTypeOf"
              value="array"
              id="array"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="array">array</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="clgTypeOf"
              value="object"
              id="object"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="object">object</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="clgTypeOf"
              value="squareBrackets"
              id="squareBrackets"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="squareBrackets">Square Brackets</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="clgTypeOf"
              value="emptyArray"
              id="emptyArray"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="emptyArray">Empty Array</label>
          </div>
        </div>
        <button className={classes.nextButton} type="submit">
          Next
        </button>
      </form>
    </div>
  );
};
