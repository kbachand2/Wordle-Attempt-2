import React from 'react';
import { checkGuess } from '../../game-helpers';

function getStatusByLetter(validatedGuesses){
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ guessLibrary, answer, validatedGuesses }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  const keys = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];
    
  return (
   <div className="keyboard">
    {keys.map((row, rowIndex) => (
      <div key={rowIndex} className="keyboard-row">
        {row.map((key) => (
          <span className={`keyboard-key ${statusByLetter[key] || ''}`} key={key}>
            {key}
          </span>
        ))}
      </div>
    ))}
   </div> 
  );
}

export default Keyboard;
