// src/pages/ChordLearning.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChordLearning = () => {
  const [chords, setChords] = useState<any[]>([]);

  useEffect(() => {
    const fetchChords = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/chords`);
        setChords(response.data);
      } catch (error) {
        console.error('Error fetching chords:', error);
      }
    };

    fetchChords();
  }, []);

  return (
    <div>
      <h2>Learn Chords</h2>
      <div>
        {chords.map((chord, index) => (
          <div key={index}>
            <h3>{chord.name}</h3>
            <p>{chord.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChordLearning;
