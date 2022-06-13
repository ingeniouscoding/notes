import { Action, combineReducers, createFeatureSelector, createSelector } from "@ngrx/store";

import { State } from "@notes/app.state";

import * as fromNotesList from './notes-list.reducer';
import * as fromListPage from './list-page.reducer';

export const notesFeatureKey = 'notes';

export interface NotesState extends State {
  [fromNotesList.notesListFeatureKey]: fromNotesList.State,
  [fromListPage.listPageFeatureKey]: fromListPage.State,
}

export function reducers(state: NotesState | undefined, action: Action) {
  return combineReducers({
    [fromNotesList.notesListFeatureKey]: fromNotesList.reducer,
    [fromListPage.listPageFeatureKey]: fromListPage.reducer,
  })(state, action);
}

const selectNotesStateFeature =
  createFeatureSelector<NotesState>(notesFeatureKey);

const selectNotesListState = createSelector(
  selectNotesStateFeature,
  (state) => state.notesList
);

export const selectNotes = createSelector(
  selectNotesListState,
  (state) => state.notes
);

export const selectListPageState = createSelector(
  selectNotesStateFeature,
  (state) => state.listPage
);
