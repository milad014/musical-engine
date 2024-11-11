import { Request, Response } from 'express';
import { getNoteService, getChordService } from '../services/noteService';

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await getNoteService();
    res.json(notes);
  } catch (error) {
    const err = error as Error; // Cast error to Error type
    res.status(500).json({ message: err.message });
  }
};

export const getChords = async (req: Request, res: Response) => {
  try {
    const chords = await getChordService();
    res.json(chords);
  } catch (error) {
    const err = error as Error; // Cast error to Error type
    res.status(500).json({ message: err.message });
  }
};
