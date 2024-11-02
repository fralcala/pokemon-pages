"use client";
import { useState } from "react";
import searchStyles from "./search.module.css";
import PokemonCard from "@/components/Pokemon/PokemonCard";
import usePokemonApi from "@/hooks/usePokemonApi";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { singlePokemon, fetchPokemonByName } = usePokemonApi();

  function changeSearchTerm(e) {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  }

  const handleSearch = () => {
    fetchPokemonByName(searchTerm);
  };

  return (
    <main className={searchStyles.main}>
      <div>
        <input
          type="search"
          id="search"
          name="search"
          value={searchTerm}
          onChange={changeSearchTerm}
          placeholder="Search for a Pokémon"
        />
        <button className={searchStyles.searchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>

      {singlePokemon && (
        <div className={searchStyles.result}>
          <PokemonCard
            img={singlePokemon.img}
            name={singlePokemon.name}
            types={singlePokemon.types}
          />
        </div>
      )}
    </main>
  );
}
