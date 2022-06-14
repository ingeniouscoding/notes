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

  getById(id: string): Observable<Note> {
    return this.http.get<{ data: Note; }>(this.api + `/${id}`)
      .pipe(
        map((response) => response.data)
      );
  }

  create(note: Note): Observable<Note> {
    return this.http.post<{ data: Note; }>(this.api, note)
      .pipe(
        map((response) => response.data)
      );
  }
}
