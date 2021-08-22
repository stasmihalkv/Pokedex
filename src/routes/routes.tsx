import { HomePage } from "../components/pages/homePage/HomePage";
import { RouteConfig } from "react-router-config";
import { CaughPokemons } from "../components/pages/CaughPokemonsList/CaughPokemonsList";
import { PokemonInfo } from "../components/pages/pokemonInfo/PokemonInfo";

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/AllPokemons",
    component: HomePage,
    exact: true
  },
  {
    path: "/CaughPokemons",
    component: CaughPokemons,
    exact: true
  },
  {
    path: "/AllPokemons/:id",
    component: PokemonInfo,
    exact: true
  }
];
