import { fork } from "redux-saga/effects";
import { loadNotesWatcher } from "./loadNotesSaga";
import { saveNotesWatcher } from "./saveNotesSaga";

function* rootSaga() {
	yield fork(loadNotesWatcher);
	yield fork(saveNotesWatcher);
}

export default rootSaga;
