import { Component, OnInit } from '@angular/core';

import { NotesService } from '@notes/notes/services/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.notesService.create();
  }
}
