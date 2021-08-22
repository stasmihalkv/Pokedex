import React from "react";
import styles from "./menu.less";
import { Link } from "react-router-dom";

export function Menu() {
  const routeToAllPokemons = "/AllPokemons";
  const routeToCaughPokemonsList = "/CaughPokemons";

  return (
    <nav className={styles.menu}>
      <Link to={routeToAllPokemons} className={styles.menuItem}>
        All pokemons
      </Link>
      <Link to={routeToCaughPokemonsList} className={styles.menuItem}>
        Caugh Pokemons
      </Link>
    </nav>
  );
}
