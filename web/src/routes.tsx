import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MapaOrfanatos from "./pages/MapaOrfanatos";
import Orfanatos from "./pages/Orfanato";
import CriarOrfanato from "./pages/CriarOrfanato";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route path='/app' component={MapaOrfanatos}></Route>
        <Route path='/orfanatos/criar' component={CriarOrfanato}></Route>
        <Route path='/orfanatos/:id' component={Orfanatos}></Route>
      </Switch>
    </BrowserRouter>
  );
}
