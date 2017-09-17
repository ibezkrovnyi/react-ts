import { notesActions } from '../redux/notes/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../redux/rootState';
import { appActions } from '../redux/app/actions';
import { App } from '../components/App';

export default connect(
  (state: RootState) => ({
    notes: state.notes.notes,
  }),
  (dispatch: Dispatch<RootState>) => ({
    addNote: (text: string) => dispatch(notesActions.add(text)),
    load: () => dispatch(appActions.load()),
    save: () => dispatch(appActions.save()),
  }),
)(App);
