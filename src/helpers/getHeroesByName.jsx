import { heroes } from "../data/Heroes";

export const getHeroesByName = (name = "") => {
	console.log("getHeroesByName called");
	if (name.length === 0) {
		return [];
	}
	name = name.toLocaleLowerCase();
	return heroes.filter((h) => {
		return h.superhero.toLocaleLowerCase().includes(name);
	});
};
