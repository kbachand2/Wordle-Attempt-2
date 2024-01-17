import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function Banner({ guessLibrary, answer }) {

  return (
    <div className={guessLibrary.includes(answer) ? "happy banner" : "sad banner"}>
      {guessLibrary.includes(answer) 
        ?<p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessLibrary.length} {guessLibrary.length > 1 ? "guesses" : "guess"}</strong>.
        </p> 
        : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      }
    </div>
  );
}

export default Banner;
