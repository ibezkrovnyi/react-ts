import { ThunkAction } from '../../redux';
import { NotesState } from '../notes/state';
import { notesActions } from '../notes/actions';

export enum ACTION_TYPES {
  LOAD = 'APP.LOAD',
  SAVE = 'APP.SAVE',
}

export const appActions = {
  load: (): ThunkAction => async (dispatch, getState) => {
    dispatch(notesActions.loaded({ notes: [] }));
  },
  save: (): ThunkAction => async (dispatch, getState) => {
    // dd
  },
};
