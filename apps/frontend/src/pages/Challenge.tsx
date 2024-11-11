// src/pages/Challenge.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Challenge = () => {
  const [question, setQuestion] = useState<any | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/random-note-or-chord`);
        setQuestion(response.data);
      } catch (error) {
        console.error('Error fetching challenge:', error);
      }
    };

    fetchChallenge();
  }, []);

  const handleAnswer = () => {
    setIsCorrect(userAnswer === question?.correctAnswer);
  };

  return (
    <div>
      <h2>Challenge: Identify the Note or Chord</h2>
      {question && (
        <div>
          <p>{question.question}</p>
          <div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleAnswer}>Submit Answer</button>
          </div>
          {isCorrect !== null && (
            <p>{isCorrect ? 'Correct!' : 'Incorrect. Try again!'}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Challenge;
