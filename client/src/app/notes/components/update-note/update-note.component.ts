import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';

import * as fromNotes from '@notes/notes/reducers';
import { NotesActions } from '@notes/notes/actions';
import { Note } from '@notes/notes/models/note.model';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss'],
})
export class UpdateNoteComponent {
  private note$ = this.store.select(fromNotes.selectCurrent);
  private page$ = this.store.select(fromNotes.selectUpdatePageState);

  public vm$ = combineLatest([this.note$, this.page$])
    .pipe(
      map(([note, page]) => ({ note, page }))
    );

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  onSave(note: Note): void {
    this.store.dispatch(NotesActions.update({ note }));
  }
}
