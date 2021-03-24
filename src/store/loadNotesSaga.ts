import { call, put, takeLatest } from "redux-saga/effects";
import { LOAD_NOTES_DB } from "./notesTypes";
import { getNotesDB } from "../api";
import { setNotes } from "./notesActions";

/* 
sagas are based on generators so cannot use async await here
instead, use combination of saga effects like to perform another request, use yield call
*/

export function* loadNotesWatcher() {
	yield takeLatest(LOAD_NOTES_DB, loadNotesFlow);
}

function* loadNotesFlow(): any {
	const notes = yield call(getNotesDB);
	yield put(setNotes(notes));
}