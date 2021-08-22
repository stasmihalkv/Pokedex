import { action, observable } from "mobx";
import { locationService } from "../../services/LocationService";
import data from "./db.json";
export class ElementsStore {
  @observable pokemons = data.pokemons;

  @observable activePokemon: number;

  @observable timeOfCapture: string;

  public isPokemonCaugh(id) {
    return this.pokemons[id].isCaugh;
  }

  @action catchPokemon = i => {
    const newArr = [...this.pokemons];
    newArr[i - 1].isCaugh = true;
    /* {...this.pokemons[i - 1], this.timeOfCapture : new Date().toLocaleDateString()} */
    this.setPokemons(newArr);
  };

  @action selectPokemon = i => {
    /* this.setState({
      flag : !this.state.flag
    }) */
    this.activePokemon = i;
    locationService.push(`/AllPokemons/${i}`);
  };

  @action deletePokemon = id => {
    const newArr = [...this.pokemons];
    console.log(id);
    newArr.splice(id, 1);
    this.setPokemons(newArr);
  };

  public getActivePokemon() {
    return this.activePokemon;
  }

  @action setPokemons(payload) {
    this.pokemons = payload;
  }
}
/*

  public changeElementTitle(id, newTitle) {
    const newArr = [...this.elements];
    newArr[id].title = newTitle;
    this.setTasks(newArr);
  }


  @computed get countOfElements() {
    return this.elements.length;
  }

  @action setTasks(payload) {
    this.elements = payload;
  }

  @action addTask(newTitle) {
    const newArr = [...this.elements];
    newArr.push({
      userId: this.elements.length + 1 || 0,
      id: 2,
      title: newTitle,
      completed: false
    });
    this.setTasks(newArr);
  }

  @action deleteElement = id => {
    const newArr = [...this.elements];
    newArr.splice(id, 1);
    this.setTasks(newArr);
  };
}
*/
