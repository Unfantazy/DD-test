import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import {Navbar} from "../Navbar";
import {CreateAppeal} from "../pages/CreateAppeal/CreateAppeal";
import {Appeals} from "../pages/Appeals/Appeals";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
        <Switch>
            <Route exact path={"/create"} render={() => <CreateAppeal/>}/>
            <Route path={"/appeal"} render={() => <Appeals /> }/>
            <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
            <Redirect from={'*'} to={"/404"}/>
        </Switch>
    </div>
  );
}

export default App;
