import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { NotesActions, NotesApiActions } from "../actions";
import { NotesService } from "../services/notes.service";

@Injectable()
export class NotesEffects {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.getAll),
      switchMap(() =>
        this.notesService.getAll()
          .pipe(
            map((notes) => NotesApiActions.getAllSuccess({ notes })),
            catchError((err) =>
              of(NotesApiActions.getAllFailure({ error: err.error.message })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private notesService: NotesService
  ) { }
}