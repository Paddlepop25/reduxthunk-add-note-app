export const getNotesDB = async () => {
	return fetch("http://localhost:4000/getnotes").then((res) => res.json());
};

export const postNotesDB = async (notes: string[]) => {
	return fetch("http://localhost:4000/postnotes", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(notes),
	}).then((res) => res.json());
};
