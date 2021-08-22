import React from "react";
import { elementsStore } from "../../stores/Stores";
import styles from "./caughPokemonList.less";
import { Menu } from "../../Menu/Menu";

export class CaughPokemons extends React.Component {
  render() {
    const { pokemons } = elementsStore;

    const pokemonsList = pokemons
      .filter(item => {
        return item.isCaugh === true;
      })
      .map(item => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={null}>
              <img src={`../../pokemons/${item.id}.png`} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          </div>
        );
      });

    return (
      <div className={styles.homePage}>
        <Menu />
        <div className={styles.itemContainer}>{pokemonsList}</div>
      </div>
    );
  }
}
