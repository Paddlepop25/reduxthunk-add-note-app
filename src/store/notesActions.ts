import {
	ADD_NOTE,
	SET_NOTES,
	AddNoteAction,
	SetNotesAction,
	SAVE_NOTES_DB,
	LOAD_NOTES_DB,
	SaveNotesAction,
	LoadNotesAction,
} from "./notesTypes";
import {} from "./notesTypes";

// => ( { } ) because returning object so need to surround with ()
export const addNote = (note: string): AddNoteAction => ({
	type: ADD_NOTE,
	payload: note,
});

export const setNotes = (notes: string[]): SetNotesAction => ({
	type: SET_NOTES,
	payload: notes,
});

export const saveNotes = (notes: string[]): SaveNotesAction => ({
	type: SAVE_NOTES_DB,
	payload: notes,
});

export const loadNotes = (): LoadNotesAction => ({
	type: LOAD_NOTES_DB,
});
