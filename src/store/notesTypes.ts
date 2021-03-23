export const ADD_NOTE = "ADD_NOTE";
export const SET_NOTES = "SET_NOTES";

export type AddNoteAction = {
	type: typeof ADD_NOTE;
	payload: string;
};

export type SetNotesAction = {
	type: typeof SET_NOTES;
	payload: string[];
};

export type NoteActions = AddNoteAction | SetNotesAction;
