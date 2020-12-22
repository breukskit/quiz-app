import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { AlternativesOne } from './components/AlternativesOne';
import { AlternativesTwo } from './components/AlternativesTwo';
import { AlternativesThree } from './components/AlternativesThree';
import { AlternativesFour } from './components/AlternativesFour';
import { AlternativesFive } from './components/AlternativesFive';
import { Header } from './components/Header';
import { QUESTIONS } from './components/Questions';

export type State = {
  president: string;
  javaScriptCreated: string;
  CSSAcronym: string;
  HTMLAcronym: string;
  clgTypeOf: string;
};

export const defaultState = {
  president: '',
  javaScriptCreated: '',
  CSSAcronym: '',
  HTMLAcronym: '',
  clgTypeOf: '',
};

const useStyles = createUseStyles({
  container: {
    maxWidth: '1140px',
    margin: 'auto',
    padding: '1rem',
  },
});

function App() {
  const [numOfQuestion, setNumOfQuestion] = useState(0);
  const [state, setState] = useState(defaultState);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header
        numOfQuestion={numOfQuestion}
        question={QUESTIONS[numOfQuestion]}
      ></Header>
      {numOfQuestion === 0 && (
        <AlternativesOne
          numOfQuestion={numOfQuestion}
          setNumOfQuestion={setNumOfQuestion}
          state={state}
          setState={setState}
        />
      )}
      {numOfQuestion === 1 && (
        <AlternativesTwo
          numOfQuestion={numOfQuestion}
          setNumOfQuestion={setNumOfQuestion}
          state={state}
          setState={setState}
        />
      )}
      {numOfQuestion === 2 && (
        <AlternativesThree
          numOfQuestion={numOfQuestion}
          setNumOfQuestion={setNumOfQuestion}
          state={state}
          setState={setState}
        />
      )}
      {numOfQuestion === 3 && (
        <AlternativesFour
          numOfQuestion={numOfQuestion}
          setNumOfQuestion={setNumOfQuestion}
          state={state}
          setState={setState}
        />
      )}
      {numOfQuestion === 4 && (
        <AlternativesFive
          numOfQuestion={numOfQuestion}
          setNumOfQuestion={setNumOfQuestion}
          state={state}
          setState={setState}
        />
      )}
    </div>
  );
}

export default App;
