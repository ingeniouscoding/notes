import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, tap } from 'rxjs';

import * as fromNotes from '@notes/notes/reducers';
import { NotesActions } from '@notes/notes/actions';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent {
  private notes$ = this.store.select(fromNotes.selectNotes)
    .pipe(
      tap((notes) => {
        if (notes === null) {
          this.store.dispatch(NotesActions.getAll());
        }
      })
    );
  private page$ = this.store.select(fromNotes.selectListPageState);

  public vm$ = combineLatest([this.notes$, this.page$])
    .pipe(
      map(([notes, page]) => ({ notes, page }))
    );

  constructor(private store: Store) { }
}
