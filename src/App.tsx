import { NewNoteInput } from "./components/NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./store/notesReducer";
import { addNote, saveToBackend, loadFromBackend } from "./store/notesActions";

// react-redux hooks
// useSelector: a function that parse state object and get the required fields
// 1st parameter (NotesState): specify the type of state
// 2nd parameter(NotesState['notes']) specify the return type of useSelector hook
// 2nd parameter: NotesState, 'notes' field
// below 'notes' is an array of strings
function App() {
	const notes = useSelector<NotesState, NotesState["notes"]>(
		(state) => state.notes
	);

	// in redux, state is updated by dispatching actions
	const dispatch = useDispatch();

	// inside dispatch, need to create action
	// action is object containing... refer to noteReducer.ts type Action
	const addNoteFromComponent = (note: string) => {
		dispatch(addNote(note));
	};

	const onSave = () => {
		dispatch(saveToBackend());
	};

	const onLoad = () => {
		dispatch(loadFromBackend());
	};

	return (
		<>
			<NewNoteInput addNote={addNoteFromComponent} />
			<hr />

			<ul>
				{notes.map((note, index) => {
					return <li key={note + index}>{note}</li>;
				})}
			</ul>

			<hr />
			<button onClick={onSave} disabled={notes.length <= 0}>
				Save to backend
			</button>
			<button onClick={onLoad}>Load from backend</button>
		</>
	);
}

export default App;
