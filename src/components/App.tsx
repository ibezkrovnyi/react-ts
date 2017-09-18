import { RootState } from '../redux/rootState';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThunkAction } from '../redux';
import { NoteData } from '../redux/notes/state';
import { Note } from './Note';
import { notesActions } from '../redux/notes/actions';

interface InjectedProps {
  save: () => ThunkAction;
  load: () => ThunkAction;
  addNote: typeof notesActions.add;
  notes: NoteData[];
}

export class App extends React.Component<InjectedProps> {
  componentWillMount() {
    this.props.load();
  }

  addNote = () => {
    this.props.addNote('');
    this.props.save();
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.addNote}>ADD NOTE</button>
        {this.props.notes.map((note, index) => <Note key={index} text={note.text} />)}
      </div>
    );
  }
}
