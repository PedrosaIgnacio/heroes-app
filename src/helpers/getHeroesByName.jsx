import { heroes } from "../data/Heroes";

export const getHeroesByName = (name = "") => {
	if (name.length === 0) {
		return [];
	}
	name = name.toLocaleLowerCase();
	return heroes.filter((h) => {
		return h.superhero.toLocaleLowerCase().includes(name);
	});
};
