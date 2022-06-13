import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

@NgModule({
  declarations: [
    NotesListComponent,
    CreateNoteComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
  ],
})
export class NotesModule { }
