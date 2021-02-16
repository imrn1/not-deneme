import { createAction, props } from '@ngrx/store';
import { INote } from '../note';

export const loadNotess = createAction(
  '[Notes] Load Notess'
);

export const loadNotessSuccess = createAction(
  '[Notes] Load Notess Success',
  props<{ data: any }>()
);

export const loadNotessFailure = createAction(
  '[Notes] Load Notess Failure',
  props<{ error: any }>()
);

export const getNotesByGroupName = createAction(
  '[Notes] get Notes By Group Name',
  props<{ groupName: string }>()
);

export const newNote = createAction(
  '[Notes] new Note',
  props<{ newNote: INote }>()
);
