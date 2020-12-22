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

export const AlternativesFour = (props: IProps) => {
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
              name="HTMLAcronym"
              value="hyperTextMarkupLanguage"
              id="hyperTextMarkupLanguage"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="hyperTextMarkupLanguage">
              Hyper Text Markup Language
            </label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="HTMLAcronym"
              value="holdThisMothereffingMic"
              id="holdThisMothereffingMic"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="holdThisMothereffingMic">
              Hold This Mothereffing Mic
            </label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="HTMLAcronym"
              value="error"
              id="error"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="error">ERROR</label>
          </div>
          <div className={classes.radioContainer}>
            <input
              type="radio"
              name="HTMLAcronym"
              value="hyperTransferMaximumLove"
              id="hyperTransferMaximumLove"
              className={classes.radioInput}
              onChange={handleChange}
            />
            <label htmlFor="hyperTransferMaximumLove">
              Hyper Transfer Maximum Love
            </label>
          </div>
        </div>
        <button className={classes.nextButton} type="submit">
          Next
        </button>
      </form>
    </div>
  );
};
