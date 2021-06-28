import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import {Navbar} from "../Navbar";
import {CreateAppeal} from "../pages/CreateAppeal/CreateAppeal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
        <Switch>
            <Route exact path={"/create"} render={() => <CreateAppeal/>}/>
            <Route path={"/appeal"} render={() => <h1>Обращения</h1>}/>
            <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
            <Redirect from={'*'} to={"/404"}/>
        </Switch>
    </div>
  );
}

export default App;
