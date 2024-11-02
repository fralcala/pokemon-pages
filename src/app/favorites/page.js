"use client";
import favStyles from "./favorites.module.css";
import usePokemonApi from "@/hooks/usePokemonApi";
import PokemonCard from "@/components/Pokemon/PokemonCard";

export default function Favorites() {
  const { favs } = usePokemonApi();

  return (
    <main className={favStyles.main}>
      <h1>Your Favorites!</h1>

      {favs.length === 0 && <p>No favorite Pokémon added yet.</p>}

      {favs.length > 0 && (
        <div>
          {favs.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              img={pokemon.img}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))}
        </div>
      )}
    </main>
  );
}
