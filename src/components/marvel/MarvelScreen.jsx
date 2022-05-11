import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/authContext";
import { HeroList } from "../hero/HeroList";
import { useNavigate } from "react-router-dom";
export const MarvelScreen = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user.logged) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Marvel Screen </h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
