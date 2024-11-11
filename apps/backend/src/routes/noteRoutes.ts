import { Router } from 'express';
import { getNotes, getChords } from '../controllers/noteControllers';

const router = Router();

router.get('/notes', getNotes);
router.get('/chords', getChords);

export { router as noteRoutes };