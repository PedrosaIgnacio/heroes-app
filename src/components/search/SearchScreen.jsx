import React, { useMemo } from "react";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

export const SearchScreen = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5 animate__animated animate__bounceInUp">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-7 animate__animated animate__bounceInRight">
          <h4>Resultados</h4>
          <hr />

          {q === "" && <div className="alert alert-info"> Buscar un héroe</div>}

          {heroesFilter.length < 1 && q !== "" ? (
            <div className="alert alert-danger"> No hay resultados: {q}</div>
          ) : (
            heroesFilter.map((h) => {
              return <HeroCard key={h.id} {...h} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
