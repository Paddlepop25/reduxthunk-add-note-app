export const ADD_NOTE = "ADD_NOTE";
export const SET_NOTES = "SET_NOTES";
export const SAVE_NOTES_DB = "SAVE_NOTES";
export const LOAD_NOTES_DB = "LOAD_NOTES";

export type AddNoteAction = {
	type: typeof ADD_NOTE;
	payload: string;
};

export type SetNotesAction = {
	type: typeof SET_NOTES;
	payload: string[];
};

export type NoteActions = AddNoteAction | SetNotesAction;

export type SaveNotesAction = {
	type: typeof SAVE_NOTES_DB;
	payload: string[];
};

export type LoadNotesAction = {
	type: typeof LOAD_NOTES_DB
}