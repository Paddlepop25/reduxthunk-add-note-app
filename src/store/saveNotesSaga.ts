import { takeLatest, call } from "redux-saga/effects";
import { SaveNotesAction, SAVE_NOTES_DB } from "./notesTypes";
import { postNotesDB } from "../api";

export function* saveNotesWatcher() {
	yield takeLatest(SAVE_NOTES_DB, saveNotesFlow);
}

function* saveNotesFlow(action: SaveNotesAction) {
	yield call(postNotesDB, action.payload);
}
