import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import MapaOrfanatos from './pages/MapaOrfanatos'

export default function Routes() {
return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Landing} ></Route>
        <Route path='/app' component={MapaOrfanatos} ></Route>
    </Switch>
    </BrowserRouter>
);
}
