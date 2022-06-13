import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromNotes from './reducers';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NotesEffects } from './effects/notes.effects';

@NgModule({
  declarations: [
    NotesListComponent,
    CreateNoteComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    StoreModule.forFeature(fromNotes.notesFeatureKey, fromNotes.reducers),
    EffectsModule.forFeature([NotesEffects]),
  ],
})
export class NotesModule { }
