"use client";
import { useState } from "react";
import pokemonStyles from "./pokemon.module.css";
// import { PokemonProvider } from "@/hooks/usePokemonApi";
import usePokemonApi from "@/hooks/usePokemonApi";

export default function PokemonCard({ img = "", name = "", types = [] }) {
  const typesJsx = types.map((typeObj) => typeObj.type.name).join(", ");
  const { favs, addFavorite, removeFavorite } = usePokemonApi();

  const isFavorite = favs.some((pokemon) => pokemon.name === name);

  const [favoriteButton, setFavoriteButton] = useState("Add to Favorites");

  const handleFavoriteToggle = () => {
    const pokemonData = { img, name, types };
    if (!isFavorite) {
      addFavorite(pokemonData);
      setFavoriteButton("Remove From Favorites");
    } else {
      removeFavorite(name);
      setFavoriteButton("Add To Favorites");
    }
  };

  return (
    <div className={pokemonStyles.pokeCard}>
      <img src={img} alt={`${name} image`} />
      <div>
        <h4>{name}</h4>
        <p>
          <i>Types: {typesJsx}</i>
        </p>
        <button onClick={handleFavoriteToggle}>{favoriteButton}</button>
      </div>
    </div>
  );
}
