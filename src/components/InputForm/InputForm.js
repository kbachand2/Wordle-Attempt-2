import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function InputForm({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState('');


  function handleSubmit(event){
    event.preventDefault();

    handleSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus != 'running'} 
        id="guess-input" 
        type="text" 
        value={guess}
        pattern="[A-Za-z]{5}"
        maxLength="5"
        title="Enter exactly 5 characters"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
          }}
        />
    </form>
  );
}

export default InputForm;
