import React from "react";
import { observer } from "mobx-react";
import styles from "./pokemonCard.less";
import { elementsStore } from "../../../stores/Stores";

interface Props {
  name: string;
  id: number;
  isCaugh: boolean;
}

@observer
export class PokemonCard extends React.Component<Props> {
  render() {
    const { name, id, isCaugh } = this.props;
    const { catchPokemon, selectPokemon } = elementsStore;

    const cardBtn = isCaugh ? "Caught (" : "Catch me";

    return (
      <div className={styles.item} key={id}>
        <div>
          <div className={styles.pokemonImg} onClick={() => selectPokemon(id)}>
            <img src={`../pokemons/${id}.png`} alt={name} />
          </div>
          <h2>{name}</h2>
          <button
            className={isCaugh? styles.catchBtnDisable : styles.catchBtn}
            onClick={() => catchPokemon(id)}
            disabled={isCaugh ? true : null}
          >
            {cardBtn}
          </button>
        </div>
      </div>
    );
  }
}
