// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Note and Chord Learning App</h1>
      <div>
        <Link to="/note-learning">
          <button>Start Learning Notes</button>
        </Link>
      </div>
      <div>
        <Link to="/chord-learning">
          <button>Start Learning Chords</button>
        </Link>
      </div>
      <div>
        <Link to="/challenge">
          <button>Take a Challenge</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
