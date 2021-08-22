import React from "react";
import { observer } from "mobx-react";
import { elementsStore } from "../../stores/Stores";
import styles from "./homePage.less";
// import { CaughPokemons } from "../CaughPokemonsList/CaughPokemonsList";
import { PokemonCard } from "./PokemonCard/PokemonCard";
import { Menu } from "../../Menu/Menu";
import axios from 'axios';

@observer
export class HomePage extends React.Component {


  render() {
    const pokemonsList = elementsStore.pokemons.map(item => {
      return (
        <div className={styles.item} key={item.id}>
          <div>
            <PokemonCard name={item.name} id={item.id} isCaugh={item.isCaugh} />
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
