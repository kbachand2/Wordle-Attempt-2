import React from 'react';
import Guess from '../Guess';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {range} from '../../utils';

function Guesses({ guessLibrary, setGuessLibrary, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess key={number} answer={answer} guess={guessLibrary[number]}/>
      ))}
    </div>
  );
}

export default Guesses;
