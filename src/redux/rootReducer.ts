import { combineReducers } from 'redux';
import { RootState } from './rootState';
import notes from './notes/reducers';

export default combineReducers<RootState>({
  notes,
});
