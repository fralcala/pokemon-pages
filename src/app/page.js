"use client";
import usePokemonApi from "@/hooks/usePokemonApi";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const pokeData = usePokemonApi();

  useEffect(() => {
    if (pokeData.totalPokemonCount === 0) {
      pokeData.getNumberOfPokemon();
    }
  }, [pokeData]);

  console.log(pokeData);

  return (
    <main className={styles.main}>
      <h1>Home</h1>
    </main>
  );
}
