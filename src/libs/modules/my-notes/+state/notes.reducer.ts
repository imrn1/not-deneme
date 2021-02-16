import { Action, createReducer, on } from '@ngrx/store';
import * as NotesActions from './notes.actions';

export const notesFeatureKey = 'notes';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(NotesActions.loadNotess, state => state),
  on(NotesActions.loadNotessSuccess, (state, action) => state),
  on(NotesActions.loadNotessFailure, (state, action) => state),

);

