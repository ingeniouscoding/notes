import { Action, combineReducers, createFeatureSelector, createSelector } from "@ngrx/store";

import { State } from "@notes/app.state";

import * as fromNotesList from './notes-list.reducer';
import * as fromListPage from './list-page.reducer';
import * as fromCreatePage from './create-page.reducer';
import * as fromShowPage from './show-page.reducer';

export const notesFeatureKey = 'notes';

export interface NotesState extends State {
  [fromNotesList.notesListFeatureKey]: fromNotesList.State,
  [fromListPage.listPageFeatureKey]: fromListPage.State,
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State,
  [fromShowPage.showPageFeatureKey]: fromShowPage.State,
}

export function reducers(state: NotesState | undefined, action: Action) {
  return combineReducers({
    [fromNotesList.notesListFeatureKey]: fromNotesList.reducer,
    [fromListPage.listPageFeatureKey]: fromListPage.reducer,
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromShowPage.showPageFeatureKey]: fromShowPage.reducer,
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

export const selectCurrent = createSelector(
  selectNotesListState,
  (state) => state.current
);

export const selectListPageState = createSelector(
  selectNotesStateFeature,
  (state) => state.listPage
);

export const selectCreatePageState = createSelector(
  selectNotesStateFeature,
  (state) => state.createPage
);

export const selectShowPageState = createSelector(
  selectNotesStateFeature,
  (state) => state.showPage
);
