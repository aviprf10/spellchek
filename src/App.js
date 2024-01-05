import React, { useState } from 'react';

const XSpellCheck = () => {
  const [userInput, setUserInput] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const dictionary = {
    teh: 'the',
    wrok: 'work',
    fot: 'for',
    exampl: 'example',
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSpellCheck = () => {
    // Check if the input is empty or contains only whitespace
    if (!userInput.trim()) {
      setSuggestion('');
      return;
    }

    const words = userInput.split(/\s+/);

    for (const word of words) {
      const correctedWord = dictionary[word.toLowerCase()];
      if (correctedWord) {
        setSuggestion(`Did you mean: ${correctedWord}?`);
        return;
      }
    }

    setSuggestion('');
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea value={userInput} onChange={handleInputChange} placeholder='Enter text...' />
      <button onClick={handleSpellCheck}>Spell Check</button>
      <p>Suggestion: {suggestion}</p>
    </div>
  );
};

export default XSpellCheck;
