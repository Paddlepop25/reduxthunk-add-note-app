// in redux, reducers are pure functions that calculate the new value of state
// import { AddNoteAction, NoteAction } from "./notesActions";
import { ADD_NOTE, SET_NOTES, NoteActions } from "./notesTypes";

// state = previous state
// action = event containing the data to calculate the new state
// this reducer returns the new state value
export interface NotesState {
	notes: string[]; // array of empty strings
}

const initialState = {
	notes: [],
};

export const notesReducer = (
	state: NotesState = initialState,
	// action: AddNoteAction // TYPE ISSUE HERE, only for 1 action
	action: NoteActions // either addnote/setnote
) => {
	switch (action.type) {
		case ADD_NOTE: {
			return {
				...state,
				notes: [...state.notes, action.payload], // add new note
			};
		}
		case SET_NOTES: {
			return {
				...state,
				notes: action.payload,
			};
		}
		default:
			return state;
	}
};
