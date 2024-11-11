// This is where you would typically interact with a database
export const getNoteService = async () => {
  const notes = [
    { name: "C", description: "C is the first note in the C major scale." },
    { name: "D", description: "D is the second note in the C major scale." },
    { name: "E", description: "E is the third note in the C major scale." },
    { name: "F", description: "F is the fourth note in the C major scale." },
    { name: "G", description: "G is the fifth note in the C major scale." },
    { name: "A", description: "A is the sixth note in the C major scale." },
    { name: "B", description: "B is the seventh note in the C major scale." },
  ];
  return notes;
};

export const getChordService = async () => {
  return ["Cmaj", "Dmin", "G7", "Fmaj"]; // Example data, replace with actual logic
};
