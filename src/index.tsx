import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router";
import { renderRoutes } from "react-router-config";
import { elementsStore } from "./components/stores/Stores";
import { routes } from "routes/routes";
import { locationService } from "services/LocationService";
import "./styles/base.less";
import "bootstrap/dist/css/bootstrap.min.css";

function init() {

  fetch(`http://localhost:4000/pokemons`)
  .then((res) => res.json())
  .then(res => {
    elementsStore.setPokemons(res)
  })

  try {
    locationService.init();

    ReactDOM.render(
      <Provider>
        <Router history={locationService.history}>
          {renderRoutes(routes)}
        </Router>
      </Provider>,
      document.getElementById("root")
    );
  } catch (e) {
    console.log(e);
  }
}

init();
