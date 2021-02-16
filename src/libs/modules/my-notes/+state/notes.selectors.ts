import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNotes from './notes.reducer';

export const selectNotesState = createFeatureSelector<fromNotes.State>(
  fromNotes.notesFeatureKey
);
