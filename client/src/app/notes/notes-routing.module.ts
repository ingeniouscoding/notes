import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { ShowNoteComponent } from './components/show-note/show-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';

const routes: Routes = [
  {
    path: '',
    component: NotesListComponent,
  },
  {
    path: 'create',
    component: CreateNoteComponent,
  },
  {
    path: ':id/edit',
    component: UpdateNoteComponent,
  },
  {
    path: ':id',
    component: ShowNoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
