import React from "react";
import styles from "./pokemonInfo.less";
import { elementsStore } from "../../stores/Stores";
import { Menu } from "../../Menu/Menu";

export class PokemonInfo extends React.Component {
  render() {
    const { pokemons } = elementsStore;

    return (
      <div>
        <Menu />
        <div className={styles.pokemonInfoContainer}>
          <h1>Pokemon Info</h1>
          <div className={styles.pokemonInfoImg}>
            <img
              src={`../pokemons/${elementsStore.getActivePokemon()}.png`}
              alt={pokemons[elementsStore.getActivePokemon() - 1].name}
            />
          </div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row">Id:</th>
                <td>{pokemons[elementsStore.getActivePokemon() - 1].id}</td>
              </tr>
              <tr>
                <th scope="row">Name:</th>
                <td>{pokemons[elementsStore.getActivePokemon() - 1].name}</td>
              </tr>
              <tr>
                <th scope="row">Status:</th>
                <td>
                  {pokemons[elementsStore.getActivePokemon() - 1].isCaugh
                    ? "Caugh"
                    : "Not Caugh"}
                </td>
              </tr>
              <tr>
                <th scope="row">Date of capture:</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

/* <td>{pokemons[elementsStore.getActivePokemon()-1].timeOfCapture ? pokemons[elementsStore.getActivePokemon()-1].timeOfCapture : "-"}</td>    */
