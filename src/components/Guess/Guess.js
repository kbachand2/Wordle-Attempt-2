import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }){
  const className = status ? `cell ${status}` : 'cell';

  return <span className = {className}>{letter}</span>
}

function Guess({ guess, answer }) {
  const checkedGuessArray = checkGuess(guess, answer);
  return (
    <>
      <p className="guess">
        {range(5).map((number) => (
          <Cell
              key={number}
              letter={guess ? checkedGuessArray[number].letter : undefined}
              status={guess ? checkedGuessArray[number].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;
