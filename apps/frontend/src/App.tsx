// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoteLearning from './pages/NoteLearning';
import ChordLearning from './pages/ChordLearning';
import Challenge from './pages/Challenge';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note-learning" element={<NoteLearning />} />
        <Route path="/chord-learning" element={<ChordLearning />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </Router>
  );
};

export default App;
