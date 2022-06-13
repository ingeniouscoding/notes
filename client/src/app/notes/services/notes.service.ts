import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private readonly api = environment.api + 'notes';

  constructor(private http: HttpClient) { }

  getAll() {
    this.http.get<Note[]>(this.api).subscribe(console.log);
  }

  create() {
    this.http.post<Note>(this.api, {
      title: 'title test',
      body: 'body test',
      color: 'color test',
    }).subscribe(console.log);
  }
}
