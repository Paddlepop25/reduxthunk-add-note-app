import { Dispatch } from "redux";
import { NotesState } from "./notesReducer";
import { ADD_NOTE, NoteActions, SET_NOTES } from "./notesTypes";
import { AddNoteAction, SetNotesAction } from "./notesTypes";

// => ( { } ) because returning object so need to surround with ()
export const addNote = (note: string): AddNoteAction => ({
	type: ADD_NOTE,
	payload: note,
});

export const setNotes = (notes: string[]): SetNotesAction => ({
	type: SET_NOTES,
	payload: notes,
});

/* 
THUNKS: action creators that return a function instead of action.
thunk can delay dispatch of an action or dispatch on ly if certain condition is met
inner function receives the store methods dispatch and getState as parameters
its an action creator that returns a fuction to perform asynchronous dispatch or conditional dispatch

below, the 2nd () will be postponed; will be executed when the function is dispatched
thunks are like regular action creators but instead of creating an object that 
will calculate the new value of state, thunks creates a function to access state, 
store data and dispatch new actions
*/

export const saveToBackend = () => async (
	dispatch: Dispatch<NoteActions>,
	getState: any
) => {
	const notes = getState().notes; // get notes from State
	await fetch("http://localhost:4000/postnotes", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify(notes),
	});
	alert("Notes posted! 💌");
};

export const loadFromBackend = () => async (
	dispatch: Dispatch<NoteActions>
) => {
	const notes = await fetch("http://localhost:4000/getnotes").then((res) =>
		res.json()
	);
	dispatch(setNotes(notes)); // will overwrite existing notes
};
