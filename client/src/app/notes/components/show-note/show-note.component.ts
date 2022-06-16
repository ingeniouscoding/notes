import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromNotes from '@notes/notes/reducers';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss'],
})
export class ShowNoteComponent {
  public note$ = this.store.select(fromNotes.selectCurrent);

  constructor(private store: Store) { }
}
