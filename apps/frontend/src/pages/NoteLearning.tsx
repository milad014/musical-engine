import React, { useEffect, useState } from 'react';
import { fetchNotes } from '../services/api';

const NoteLearning = () => {
  const [notes, setNotes] = useState<{ name: string; description: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const { data } = await fetchNotes();  // Using the API function
        console.log('data', data);
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      } finally {
        setLoading(false);
      }
    };
    loadNotes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Learn Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800">{note.name}</h3>
            <p className="text-gray-600 mt-2">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteLearning;
