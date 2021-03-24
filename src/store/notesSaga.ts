import { call, put, takeLatest } from "redux-saga/effects";
import { LOAD_NOTES_DB, SaveNotesAction, SAVE_NOTES_DB } from "./notesTypes";
import { getNotesDB, postNotesDB } from "../api";
import { setNotes } from "./notesActions";

/* 
sagas are based on generators so cannot use async await here
instead, use combination of saga effects like to perform another request, use yield call
*/

function* loadNotesFlow(): any {
	const notes = yield call(getNotesDB); // get data from backend (api call in getNotesDB)
	yield put(setNotes(notes)); // dispatch another action to update state with notes
}
export function* loadNotesWatcher() {
	yield takeLatest(LOAD_NOTES_DB, loadNotesFlow);
}

function* saveNotesFlow(action: SaveNotesAction) {
	yield call(postNotesDB, action.payload);
}

export function* saveNotesWatcher() {
	yield takeLatest(SAVE_NOTES_DB, saveNotesFlow);
}
