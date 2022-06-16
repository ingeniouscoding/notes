import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromNotes from '@notes/notes/reducers';
import { NotesActions } from '@notes/notes/actions';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit {
  public page$ = this.store.select(fromNotes.selectGetByIdPageState);

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.store.dispatch(NotesActions.getById({ id }));
  }
}
