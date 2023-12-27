import React, { useState } from 'react';

const XSpellCheck = () => {
  const [userInput, setUserInput] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const dictionary = [
    'work',
    'example',
    'another',
    'the',
    // Add more words to your dictionary
  ];

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSpellCheck = () => {
    const words = userInput.split(' ');

    // Check if the input is empty or contains only whitespace
    if (!userInput.trim()) {
      setSuggestion('');
      return;
    }

    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      const correctedWord = dictionary.find(
        (entry) => entry.toLowerCase() === word
      );

      if (correctedWord) {
        setSuggestion(`Did you mean: ${correctedWord}?`);
        return;
      }
    }

    setSuggestion('');
  };

  return (
    <div>
      <textarea value={userInput} onChange={handleInputChange} />
      <button onClick={handleSpellCheck}>Spell Check</button>
      <p>Suggestion: {suggestion}</p>
    </div>
  );
};

export default XSpellCheck;
