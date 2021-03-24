import { fork } from "redux-saga/effects";
import { loadNotesWatcher, saveNotesWatcher } from "./notesSaga";

/**
 yield can pause the execution and also return value from function then continue
 return is like stop immediately
 */

// fork can launch new independent sagas
function* rootSaga() {
	yield fork(loadNotesWatcher);
	yield fork(saveNotesWatcher);
}

export default rootSaga;
