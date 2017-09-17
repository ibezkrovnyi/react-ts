import { AppState, initialAppState } from './app/state';
import { NotesState, initialNotesState } from './notes/state';

export const initialState: RootState = {
  app: initialAppState,
  notes: initialNotesState,
};

export interface RootState {
  app: AppState;
  notes: NotesState;
}
