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
    if (!userInput.trim()) {
      // If the input is empty or contains only whitespace, reset the suggestion
      setSuggestion('');
      return;
    }

    const words = userInput.split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      const correctedWord = dictionary.find(
        (entry) => entry.toLowerCase() === word
      );

      if (correctedWord) {
        // Set the suggestion for the first misspelled word
        setSuggestion(`Did you mean: ${correctedWord}?`);
        return;
      }
    }

    // If no misspelled words found, reset the suggestion
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
