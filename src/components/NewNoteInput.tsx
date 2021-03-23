import React from "react";

interface NewNoteInputProps {
	addNote: (note: string) => void; // addNote is function
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
	const [note, setNote] = React.useState("");

	const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNote(event.target.value);
	};

	const handleNoteSubmit = () => {
		addNote(note);
		setNote("");
	};

	return (
		<div>
			<input
				value={note}
				onChange={handleNoteChange}
				type='text'
				name='note'
				placeholder='enter note'
			/>
			<button onClick={handleNoteSubmit}>Add note</button>
		</div>
	);
};
