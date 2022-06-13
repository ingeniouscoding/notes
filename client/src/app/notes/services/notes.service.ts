import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private readonly api = environment.api + 'notes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.http.get<{ data: Note[]; }>(this.api)
      .pipe(
        map((response) => response.data)
      );
  }

  create() {
    this.http.post<Note>(this.api, {
      title: 'title test',
      body: 'body test',
      color: 'color test',
    }).subscribe(console.log);
  }
}
