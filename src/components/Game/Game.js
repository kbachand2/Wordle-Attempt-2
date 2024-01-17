import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputForm from '../InputForm';
import Guesses from '../Guesses';
import Banner from '../Banner';
import Keyboard from '../Keyboard';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import { checkGuess } from '../../game-helpers';

function Game() {
  //running || won || lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guessLibrary, setGuessLibrary] = React.useState([]);

  const validatedGuesses = guessLibrary.map((guess) =>
    checkGuess(guess, answer)
  );

  console.log(`answer: ${answer}`);

  function handleSubmitGuess(guess){
    const nextGuessLibrary = [...guessLibrary, guess];
    setGuessLibrary(nextGuessLibrary);
    if(guess.toUpperCase() === answer){
      setGameStatus('won');
    }else if(guessLibrary.length===NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost');
    }
  }

  return (
  <>
    {guessLibrary.length === NUM_OF_GUESSES_ALLOWED || guessLibrary.includes(answer) ? <Banner guessLibrary={guessLibrary} answer={answer}/> : ""}
    <Guesses guessLibrary={guessLibrary} setGuessLibrary={setGuessLibrary} answer={answer}/>
    <InputForm guessLibrary={guessLibrary} setGuessLibrary={setGuessLibrary} gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess}/>
    <Keyboard validatedGuesses={validatedGuesses} guessLibrary={guessLibrary} answer={answer}/>
  </>
  );
}

export default Game;
