import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";

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
              of(NotesApiActions.getAllFailure({
                error: {
                  status: err.status,
                  message: err.message,
                }
              }))
            )
          )
      )
    )
  );

  getById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.getById),
      switchMap(({ id }) =>
        this.notesService.getById(id)
          .pipe(
            map((note) => NotesApiActions.getByIdSuccess({ note })),
            catchError((err) =>
              of(NotesApiActions.getByIdFailure({
                error: {
                  status: err.status,
                  message: err.message,
                },
              }))
            )
          )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.create),
      concatMap(({ note }) =>
        this.notesService.create(note)
          .pipe(
            map((note) => NotesApiActions.createSuccess({ note })),
            catchError((err) =>
              of(NotesApiActions.createFailure({
                error: {
                  status: err.status,
                  message: err.message,
                },
              }))
            )
          )
      )
    )
  );

  destroy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.destroy),
      mergeMap(({ id }) =>
        this.notesService.destroy(id)
          .pipe(
            map(() => NotesApiActions.destroySuccess({ id })),
            catchError((err) =>
              of(NotesApiActions.destroyFailure({
                id,
                error: {
                  status: err.status,
                  message: err.message,
                },
              }))
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private notesService: NotesService
  ) { }
}