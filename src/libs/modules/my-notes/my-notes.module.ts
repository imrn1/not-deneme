import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './content/note/note.component';
import {MatCardModule} from '@angular/material/card';
import { MyNotesRoutingModule } from './my-notes-routing.module';
import { NoteContainerComponent } from './container/note-container/note-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './+state/notes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffects } from './+state/notes.effects';
import { AddNoteComponent } from './content/add-note/add-note.component';
import { AddNoteContainerComponent } from './container/add-note-container/add-note-container.component';


@NgModule({
  declarations: [NoteComponent, NoteContainerComponent, AddNoteComponent, AddNoteContainerComponent],
  imports: [
    MyNotesRoutingModule,
    CommonModule,
    MatCardModule,
    StoreModule.forFeature(fromNotes.notesFeatureKey, fromNotes.reducer),
    EffectsModule.forFeature([NotesEffects])
  ]
})
export class MyNotesModule { }
