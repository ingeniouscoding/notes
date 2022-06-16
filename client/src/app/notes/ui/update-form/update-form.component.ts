import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Note } from '@notes/notes/models/note.model';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent implements OnInit {
  @Input() public note!: Note;
  @Output() public save = new EventEmitter<Note>();
  public fg!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      title: this.note.title,
      content: this.note.content,
      color: this.note.color,
    });
  }

  onSave(): void {
    const updatedNote: Note = {
      ...this.fg.value,
      id: this.note.id,
    };
    this.save.emit(updatedNote);
  }
}
