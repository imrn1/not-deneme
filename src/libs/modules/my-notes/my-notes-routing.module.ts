import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteContainerComponent } from './container/note-container/note-container.component';
import { AddNoteComponent } from './content/add-note/add-note.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:NoteContainerComponent
  },
  {
    path:"addNote",
    component:AddNoteComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNotesRoutingModule { }
