import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromNotes from '@notes/notes/reducers';
import { NotesActions } from '@notes/notes/actions';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss'],
})
export class ShowNoteComponent implements OnInit {
  private note$ = this.store.select(fromNotes.selectCurrent);
  private page$ = this.store.select(fromNotes.selectShowPageState);

  public vm$ = combineLatest([this.note$, this.page$])
    .pipe(
      map(([note, page]) => ({ note, page }))
    );

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.store.dispatch(NotesActions.getById({ id }));
  }
}
