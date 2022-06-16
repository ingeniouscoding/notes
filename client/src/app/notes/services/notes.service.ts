import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Note, NoteUpdateDTO } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private readonly api = environment.api + 'notes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.http.get<{ data: Note[]; }>(this.api)
      .pipe(
        map((res) => res.data)
      );
  }

  getById(id: string): Observable<Note> {
    return this.http.get<{ data: Note; }>(this.api + `/${id}`)
      .pipe(
        map((res) => res.data)
      );
  }

  create(note: Note): Observable<Note> {
    return this.http.post<{ data: Note; }>(this.api, note)
      .pipe(
        map((res) => res.data)
      );
  }

  update(note: Note): Observable<Note> {
    return this.http.patch<{ data: Note; }>(this.api, <NoteUpdateDTO>note)
      .pipe(
        map((res) => res.data)
      );
  }

  destroy(id: string): Observable<any> {
    return this.http.delete(this.api + `/${id}`);
  }
}
