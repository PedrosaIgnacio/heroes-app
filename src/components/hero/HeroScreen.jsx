import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroesById";
import { ErrorScreen } from "../error/ErrorScreen";
export const HeroScreen = () => {
	const { id: heroId } = useParams();
	const hero = useMemo(() => getHeroById(heroId), [heroId]);

	const { id, superhero, publisher, alter_ego, first_appearance, characters } =
		hero;
	const imgPath = `/assets/${id}.jpg`;
	const navigate = useNavigate();
	const handleReturn = () => {
		navigate(-1);
	};
	if (!hero) {
		return <ErrorScreen />;
	}
	return (
		<div className="row mt-5">
			<div className="col-4 animate__animated animate__fadeInLeft">
				<img src={imgPath} alt={superhero} className="img-thumbnail" />
			</div>
			<div className="col-8 animate__animated animate__fast animate__slideInUp">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego: </b>
						{alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b>
						{publisher}
					</li>
					<li className="list-group-item">
						<b>First Appearance: </b>
						{first_appearance}
					</li>
				</ul>
				<h5 className="mt-3">Characters</h5>
				<p>{characters}</p>
				<button className="btn btn-outline-primary" onClick={handleReturn}>
					Regresar
				</button>
			</div>
		</div>
	);
};
