import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NotesActions } from '@notes/notes/actions';

import { Note } from '@notes/notes/models/note.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent {
  public fg = this.fb.group({
    title: '',
    body: '',
    color: '#d5e781',
  });

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) { }

  onCreate() {
    const note: Note = {
      title: this.fg.value.title ?? '',
      body: this.fg.value.body ?? '',
      color: this.fg.value.color ?? '',
    };
    this.store.dispatch(NotesActions.create({ note }));
  }
}
